---
title: Cross-browser CSS
date: 2012-05-03
tags: ["Cross-browser","CSS","Front-end"]
---

Cross-browser issues are differences in the browser's interpretation of the spec. What? Yes. Browsers understand the same things differently. Just like humans. And that's what makes life (and developing) fun! Well, life sure but development not so much.

Writing robust cross-browser front-ends used to be hell because of the huge differences in between browsers. Time went on and even Internet Explorer 6 died. One of the biggest problems was getting users on the newest browser. Only nerds enjoy updating software. Let there be automatic updating and most of our problems were solved.

## Learn to love the diversity

In order to write cross-browser CSS you need to know the differences. Understand how things work and you will have less problems. Remember that `box-sizing` isn't supported in IE8. CSS transitions don't work in older browsers and `width: 1%` isn't always the same value.

Many layouts have more than one solution. Often times the simplest one, the one with less code will cause you less problems.

## Debugging

In your own browser you have access to all your developer tools so you can inspect and see issues. If a client tells you that your layout breaks in IE9 what can you do? What if you don't even have a Windows computer nearby? Or a Blackberry mobile device version 3.412?

[Virtual Machines](http://www.macworld.com/article/1164817/the_best_way_to_run_windows_on_your_mac.html) to the rescue. Such a machine allows you to for instance install Windows or Ubuntu on your Mac.

[Browserstack](http://www.browserstack.com/) is a service that does all the virtual machines for you and make them accessible in the browser. Just log in, choose your system and off you go. It's fast and it works. Very much worth it. Use it.

[Can I Use](http://caniuse.com/) is a great way to quickly check browsers (and which specific versions) support the feature you are using, CSS transforms for instance.

- Some good tips on [Cross-Browser Debugging CSS](http://www.stubbornella.org/content/2012/05/02/cross-browser-debugging-css/).
