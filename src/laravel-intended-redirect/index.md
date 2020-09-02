---
type: post
title: Laravel Intended Redirects
date: September 2, 2020
excerpt: How to use Laravel's Intended Redirect
meta:
  - name: description
    content: How to use Laravel's Intended Redirect
comment_link: https://twitter.com/IvanDokov/status/1301258417449979905
---

# Laravel Intended Redirects

*This post is kind of a reference note in case I forget about the code since it is missing from the official Laravel docs and I had to dig deep to find it.*

It's quite common to have some kind of protected pages which can be accessed only at some specific circumstances, for example after you subscribe and pay a monthly fee or if your user account is of a certain type, you get the point.
Usually you will want to verify the condition in which the user will be able to access the specific page. Either in a middleware or a controller or anywhere you like you will want the user to be brought back to the page once the verification is done. Laravel provides a specific type of redirect for such cases - **intended redirect**.

Before you redirect the user to verify its account you can set an intended url where the user should be returned after the verification and this is done with the following code:

```php
app('redirect')->setIntendedUrl(route('protected.page'));
// or
app('redirect')->setIntendedUrl('/url-to-protected-page');
```

When you are done verifying or charging the user or whatever you need to do to grant access to the protected page you simply use the code below instead of a regular redirect.

```php
return redirect()->intended();
```

This redirect will look for a specific session property that was set previously by the first code example. If for some reason the session data is missing you can pass a default redirect url as a parameter:
 
```php
return redirect()->intended('/default-page');
```
