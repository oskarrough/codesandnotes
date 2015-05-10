---
layout: post
title: How to reset Homebrew
date: 2013-04-29
tags: ["Articles","Homebrew","snippet"]
---

Recently I had some trouble updating my [Homebrew](http://mxcl.github.io/homebrew/) install and while I do like digging into the perfect solution sometimes an easy fix is all you need. These commands will overwrite your local brew with the latest from Git and do a hard reset on your local install, essentially clearing everything.

Copy and run these lines in your shell one after another. If it says 'remote origin already exists', just continue.

<pre class="lang:sh decode:true " >cd `brew --prefix`
git remote add origin https://github.com/mxcl/homebrew.git
git fetch origin
git reset --hard origin/master</pre>