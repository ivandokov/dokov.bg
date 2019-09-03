---
type: post
title: Depy - Simple and nearly dependency free deployment tool
date: May 21, 2019
thumbnail: /depy/depy-thumbnail.jpg
image: /depy/depy.jpg
excerpt: Depy - Simple and nearly dependency free deployment tool
meta:
  - name: description
    content: Depy - Simple and nearly dependency free deployment tool
---

# Depy
### Simple and nearly dependency free deployment tool.  
Written in `bash` the tool does not have any major dependencies. Everything you need to have installed locally is:
 * `git` (*download Depy and for updates*)
 * `ssh` (*communicate with the server*)
 * `rsync` (*transfer files*)
 * `zip` (*pack releases*)*

On the server you need to have:
* `unzip` (unpack releases)*

\* *This [could change](https://github.com/ivandokov/depy/issues/22) in a future release.*

These are basic tools which you probably have installed already on your system. For installation and configuration please head over to the [repository documentation](https://github.com/ivandokov/depy). 

## Why

You may ask why I have developed this tool when there are so many other tools that already do more. The answer is pretty simple - for fun. Well not only for fun, but it was fun do code it. Also I didn't like the tool that we used in the company where I worked at the time of the initial Depy release. It had its quirks and wasn't really easy to do something that's not included out of the box. Infact Depy is heavily inspired by this tool - [Rocketeer](http://rocketeer.autopergamene.eu/) which is inspired by [Capistrano](https://capistranorb.com). I love writing bash scripts that do my life easier and as far as I remember we had a hard time making Rocketeer do something simple on the server which was super easy with a single bash script. Don't get me wrong, Rocketeer is a great tool. It is probably even better now, but I just felt it is not the perfect tool for the job. So I decided to do it easier and with less dependencies. I really do not like the deployment tool to be dependent on the software it will deploy. It should be more generic and give full freedom for the person who setup the deployment process to do whatever he/she desires and with any tool/language that is installed on the server or locally.  

## Zero downtime deployment

Same as Rocketeer Depy offers zero downtime deployment using symlinks on the server. When a new release is deployed it is first prepared in its own directory and if the preparation steps are completed without an error the release is symlined as `current` and if the web server is configured properly to serve the `current` directory as web root everything will be updated for the website visitors in an instant.  

## Releases and rollbacks

At any given time any release can be symlinked as `current` and baically this is the rollback functionality. Depy keeps 4 releases on the server by default but this can be changed and you can keep as many as you think are necessary.  

## The freedom

Depy's main architecture goal is to be without limitations. You should be able to do whatever you need and do it intuitively. To accomplish this I added hooks in the process of deployment where you can execute any code you need. These hooks are bash scripts that are ran on a specific enviroment, either locally or on the target server.
Depy has the following hooks:
* **Pre hook** `.depy-pre.sh` - This is an **optional** script that is executed locally in the project directory before the actual deployment process. It is a great place to make sure that you are not deploying broken code to the server. You can use it to execute tests, builds, etc. If the hook exits with code other than 0 the deployment process will be cancelled and marked as failed.
* **Remote hook** `.depy-remote.sh` - This is an **optional** script that is executed on the server in the new release folder before the linking of the release as current. This hook is used to install dependencies, make builds and for clean up work on the server. If the hook exits with code other than 0 the deployment process will be cancelled and marked as failed.
* **Remote post link hook** `.depy-remote-post-link.sh` - This is an **optional** script that is executed on the server in the new release folder after the linking of the release as current. This hook is used to execute code on the server after the current release is updated. For example restarting workers which depend on the current release path to point to the new code. If the hook exits with code other than 0 the deployment process will not be cancelled but marked as failed.
* **Post hook** `.depy-post.sh` - This is an **optional** script that is executed locally in the project directory after the actual deployment process. This hook is used for clean up work, announcing deploy status (for example in a Slack channel), etc. If the hook exits with code other than 0 the deployment process will be marked as failed, but cannot be cancelled because the remote stuff are already done.

## Status

I've been using Depy for the past 3 years and I did some breaking changes but it is pretty stable at the moment and I have deployed to production and staging servers more than 10 projects with different needs. I have some plans to rewrite everything in Go and release binaries for Linux, Mac and maybe even Windows, but this is just an idea and it will heavily depend on my free time which I rarely have. But even if I do not rewrite it in Go it is just fine as it is right now and this rewrite idea could be only a way to scratch my itch to do something meaningful in Go and it will probably pass.
                                  
For more information please go to the [repository documentation](https://github.com/ivandokov/depy).