---
type: post
date: January 28, 2020
title: Errors flood when restarting Ubuntu with Laravel Horizon 
excerpt: How to fix wrong shutdown sequence of Supervisor, Laravel Horizon and Redis on Ubuntu Server
meta:
  - name: description
    content: How to fix wrong shutdown sequence of Supervisor, Laravel Horizon and Redis on Ubuntu Server
comment_link: https://twitter.com/IvanDokov/status/1222091637972766720
---

# Errors flood when restarting Ubuntu with Laravel Horizon

Do your get your log files or your Slack channel flooded with such errors when you restart your Ubuntu server where you are hosting Laravel application?

> production.ERROR: Error while reading line from the server. [tcp://127.0.0.1:6379] {"exception":"[object] (Predis\\Connection\\ConnectionException(code: 0): Error while reading line from the server.

or
 
> production.ERROR: Connection refused [tcp://127.0.0.1:6379] {"exception":"[object] (Predis\\Connection\\ConnectionException(code: 111): Connection refused [tcp://127.0.0.1:6379]

If yes, you are probably running [Redis](https://redis.io/), [Laravel Horizon](https://laravel.com/docs/horizon) and [Supervisor](http://supervisord.org/) on this machine. 

## The issue

The issue is at the order of shutting down of dependent softwares or simply said Laravel Horizon depends on the Redis server being available, but it gets shut down before Supervisor and respectively Laravel Horizon. Fortunately the fix is pretty simple. 

## The fix

You should let [systemd](https://en.wikipedia.org/wiki/Systemd) knows that Supervisor depends on the Redis service being available. When you do that the system restart command will first halt Supervisor and then Redis. You have to edit the `supervisor.service` file:  

```bash
sudo nano /etc/systemd/system/multi-user.target.wants/supervisor.service
```

For the `[Unit]` section you will see `After=network.target` line. Add `redis.service` on the same line like this:

```ini
[Unit]
...
After=network.target redis.service
```

Save the file by pressing `Ctrl + x` and then `y` to confirm the edit and `Enter` to exit the editor.

Then make sure to restart the Supervisor service and you should be good to go.

```bash
sudo service supervisor restart
```

The next time you restart the server Supervisor and Laravel Horizon will get shut down before the Redis server and you will not see the same errors anymore.
