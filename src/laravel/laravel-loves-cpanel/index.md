---
type: post
title: Laravel loves cPanel, kinda
date: December 9, 2019
excerpt: How to host a Laravel application on a shared hosting with cPanel. A fairytale for cronjobs.
meta:
  - name: description
    content: How to host a Laravel application on a shared hosting with cPanel. A fairytale for cronjobs.
---

# Laravel loves cPanel, kinda

When it comes to Laravel applications you will rarely think of a shared hosting. Often you spin up a [DigitalOcean](https://www.digitalocean.com/) droplet or [Amazon EC2](https://aws.amazon.com/ec2/) server or even use serverless [Laravel Vapor](https://vapor.laravel.com/) setup.  

Unfortunately not all projects can be hosted where we want. Even a developers rebellion may not change the *(sometimes weird)* requirements of the business and we can be easily forced to host Laravel on a cPanel shared hosting. This will require some ninja moves to make our life easier when doing the development and deployment. 

## Disclaimer
Most of the tips and tricks below are related to the cPanel limitations and workarounds of these limitations. The workarounds are not the only way to accomplish what's needed but are the ones that I prefer. We are going with the assumption that you do not have `ssh` access and you cannot install additional software.

## Deployment

Keeping track of the file changes and uploading manually the changed files to the hosting is super annoying and error prone. You can always miss to upload a file and a debug frenzy begins. A better way is to use automation for this process. There aren't a lot of options that I know of that use FTP for transfer protocol. The one that I use is a PHP based [git-deploy](https://github.com/BrunoDeBarros/git-deploy-php). It uses local git to track which files are changed and upload only these. For configuration you can check the git repository.

## Vendor and bootstrap directories

One important aspect of the deployment process is the upload of the `vendor` directory. Usually you do not want to track this directory in git and this means it will not be uploaded by git-deploy. There is an option to force ignored directories to be uploaded to the server but this is not a good option because you will always upload all files from `vendor`. Additionally when you install a new package you have to upload its files from `vendor` to the server and in Laravel after package installation composer creates classes map in `bootstrap` directory. You have to upload both directories to the server and so far the best way I found is to zip these two directories in a single archive and upload that archive to the server through the cPanel File Manager. After the archive is on the server I delete the `vendor` and `bootstrap` directories and unzip the archive. This is the fastest way to install new packages for Laravel when you are hosted on cPanel based hosting without `ssh` access. 

## Storage directory symlink

Traditionally in Laravel you have to run a command in the commandline to create the symbolic link for the storage directory in `public`. This is done with `php artisan storage:link`. But when you have to run a shell command on a shared hosting without `ssh` access you have probably only one option - cronjob. It is the only allowed way to execute shell commands within cPanel based environments. To get this working you have to use the following command for the cronjob. (*Change the path to the artisan file.*)
```bash
cd /home/website/artisan php artisan storage:link >/dev/null 2>&1
```
Or manually create the symlink like this. (*Change the path to the public directory.*)
```bash
cd /home/website/public && ln -s ../storage/app/public storage >/dev/null 2>&1
```

Make sure the cronjob runs every minute so you don't have to wait for exact time and then delate it once the symlink is created.

## The web root - public and public_html directories

Every website in cPanel is uploaded to `public_html` directory. This is the web root directory. With Laravel you are using `public` directory. Usually the easiest workaround is to rename the `public` to `public_html` and be done with it but this requires additional changes for your local web server because the directory that it serves is different. In case you are using [Laravel Valet](https://laravel.com/docs/6.x/valet) you have to add new driver that serves this directory and things get more complicated. Additionally everyone that works on the project should do this for their environments. Easier approach is to change the `public_html` directory on the server. You can delete `public_html` and create a symlink which points to `public` so the Apache server can use the same configuration without any changes.

We can use the same method as the storage directory. Use the following command for a cronjob. (*Change the path to the website directory.*)

```bash
cd /home/website && rm -rf public_html; ln -s public public_html >/dev/null 2>&1
```

Make sure the cronjob runs every minute so you don't have to wait for exact time and then delate it once the symlink is created.

**WARNING** This may not work for all cPanel servers! I had a server which got corrupted with this method and I had to ask the support to restore the web root directory to `public_html`. They told me there is no way to change this directory even in Apache configs even though I know there is. I just gave up trying to change their mind.

## Scheduler cron job

And since we are on the topic of cronjobs I should mention that you should setup Laravel's Scheduler. There is nothing special here. The command that has to be ran every minute is this. (*Change the path to the website directory.*)

```bash
cd /home/website && php artisan schedule:run >> /dev/null 2>&1
```

## Queued jobs

Here things get tricky. We have to tackle two problems:
* Laravel requires a storage mechanism for the delayed jobs
* Laravel requires a worker to process the jobs

### Queue storage

The first one is easy. Since most of cPanel based hostings do not offer Redis and may not want to install it for use we can use external services such as Amazon SQS but that's not really common since we are forced to use cPanel - who would allow us to use cool external services 🤪? The more natural option for cPanel is to use MySQL for jobs queue. You should run locally 
```bash
php artisan queue:table
php artisan migrate
```
and use your prefered database client locally to copy-paste the SQL for creating the `jobs` table and execute it on the server through phpMyAdmin. Once you have the database ready make sure to change the `.env` file to be using the new connection `QUEUE_CONNECTION=mysql`.

### Queue workers

The recommented way to run job workers with Laravel is to use [Supervisord](http://supervisord.org/). This is a tool that I love and prefer over the alternatives. At the time of writing the latest stable version is `4.1.0`. Unfortunately cPanel uses python `2.6` and I was told by a support guy that it cannot be upgraded to newer version as it will break cPanel related stuff. The newest Supervisord version that runs on Python 2.6 is `3.4` and I couldn't even find documentation for it so I gave up trying to run the workers using the recommented way. And I thought and thought ... *what could be the most reliable "cPanel way" to run workers* and guess what I came up with - **cronjobs** 😆. Here is how to **run Laravel queued jobs on cPanel shared hosting**.

First here is the command to start workers to handle queued jobs. 

```bash
cd /home/website && php artisan queue:work --tries=3 --delay=60 >> /dev/null 2>&1
```

It has two parameters:  
`--tries` defines how many times a certain job will be attempted before it is logged as failed.  
`--delay` defines how much time a job with a failed attempt has to wait before it is retried.

If you want to change timeout which is the number of seconds a job can take to be executed you can pass `--timeout=90` parameter.

The important part of the cronjob command is `--stop-when-empty`. It tells the master queue worker to quit when the queue is empty. This ensures you do not have long running processes which may require service restart (like we do for the regular queue processes). After all you are running these queue workers with a cronjob and you need the process to end. Otherwise you will spawn new master process every minute. With `--stop-when-empty` the workers will quit when all jobs are processed and the queue is empty.

Here is the final command with all parameters.

```bash
cd /home/website && php artisan queue:work --tries=3 --delay=60 --timeout=90 --stop-when-empty >> /dev/null 2>&1
```

*Note:* Make sure the `--timeout` is not longer than the configuration value for `retry_after` for the database connection in `config/queue.php` because the job will be retried before it has finished processing and this could be a false-positive for a broken job.