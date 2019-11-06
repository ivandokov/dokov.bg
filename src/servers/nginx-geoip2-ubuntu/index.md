---
type: post
title: Installing nginx GeoIP2 on Ubuntu
date: November 6, 2019
excerpt: Build nginx from source with GeoIP2 module and block specific countries to access a website or make country-specific domain redirects.
meta:
  - name: description
    content: Build nginx from source with GeoIP2 module
---

# Nginx with GeoIP2 on Ubuntu

In the web you can find a lot of tutorials how to use the GeoIP module for nginx but Maxmind - the company that is providing the database for countries and cities is deprecating their old database format **dat** and replacing it with a new format - **mmdb**. The nginx setup for this new format is different and requires building the module from source since there is no official support for nginx provided by the company as stated in their [downloads](https://dev.maxmind.com/geoip/geoip2/downloadable/) page. I couldn't find a super easy guide for the new **GeoIP2** so here I am putting all the steps in case I need to do it again or if someone else is having issues with the other guides online. The guide is for Ubuntu but can be easily addapted to any Debian based systems.  

### Download the nginx source and the geoip2 module.  
*You may want to update the link to the current version of nginx that you have installed*

```bash
wget http://nginx.org/download/nginx-1.16.1.tar.gz
tar zxvf nginx-1.16.1.tar.gz
wget https://github.com/leev/ngx_http_geoip2_module/archive/master.tar.gz ngx_http_geoip2_module.tar.gz
tar zxvf ngx_http_geoip2_module.tar.gz
```

### Install Maxmind's ppa and the libraries required to build nginx
```bash
sudo add-apt-repository ppa:maxmind/ppa
apt update
apt install libmaxminddb0 libmaxminddb-dev mmdb-bin geoipupdate 
apt install libpcre3 libpcre3-dev zlib1g zlib1g-dev libssl-dev
```

### Regularly update the geoip2 database
Set a cronjob to update the geoip database.
```bash
58 13 * * 5 /usr/local/bin/geoipupdate >> /dev/null 2>&1
```
And it is good to run the update now so you have the latest data right away. 
```bash
geoipupdate
```

### Build nginx with the geoip2 module
```bash
cd nginx-1.16.1
./configure  --add-dynamic-module=../ngx_http_geoip2_module-master $(nginx -V) --with-compat
make
```

Make sure to include `--with-compat` while executing `configure` because when you try to install the module you may get the following error:  
*nginx: [emerg] module is not binary compatible*

### Install the new dynamic module in nginx
```bash
cp objs/ngx_http_geoip2_module.so /usr/lib/nginx/modules/
echo "load_module modules/ngx_http_geoip2_module.so;" > /etc/nginx/modules-available/mod-http-geoip2.conf
ln -s /etc/nginx/modules-available/mod-http-geoip2.conf /etc/nginx/modules-enabled/60-mod-http-geoip2.conf
```

### Setup nginx
In `/etc/nginx/nginx.conf` in `http` section add the following code to enable the geoip2 and automatically reload the databases if needed and pass the data to php with fastcgi params.
```text
geoip2 /usr/share/GeoIP/GeoLite2-Country.mmdb {
    auto_reload 60m;
    $geoip2_metadata_country_build metadata build_epoch;
    $geoip2_data_country_code country iso_code;
    $geoip2_data_country_name country names en;
}

geoip2 /usr/share/GeoIP/GeoLite2-City.mmdb {
    auto_reload 60m;
    $geoip2_metadata_city_build metadata build_epoch;
    $geoip2_data_city_name city names en;
}

fastcgi_param COUNTRY_CODE $geoip2_data_country_code;
fastcgi_param COUNTRY_NAME $geoip2_data_country_name;
fastcgi_param CITY_NAME    $geoip2_data_city_name;
```

### How to block countries
Again in `/etc/nginx/nginx.conf` in `http` section using a map with allowed/disallowed countries define a variable that you can use in the vhosts files.

```text
map $geoip2_data_country_code $domain_xyz_allowed_country {
    default yes;
    BG no;
}
```

In the **vhost configuration** determine what to do if the country is not allowed. Usually block it.
```text
location / {
    if ($domain_xyz_allowed_country = no) {
        return 444;
    }
}
```

### Redirect to country-specific domain
Similar logic could be used for location redirect. For example if you have multiple domains for different countries (google.com for USA, google.bg for Bulgaria, etc).
To setup the dedirect use the `$geoip2_data_country_code` variable to decide whether or where the visitor should be redirected.

In the **vhost configuration** of the main domain (e.g. *google.com*)
```text
location / {
    if ($geoip2_data_country_code = BG) {
        return 301 https://google.bg$request_uri;
    }
}
```
