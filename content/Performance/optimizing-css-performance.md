---
title: Optimizing CSS performance
---

In short, don't worry too much about your selectors. Unless you're rendering 1000 items with box-shadows, gradients, animations and annoying hover effects they are all fast enough - including the * selector. What you should worry about is janky performance when scrolling, heavy CSS transforms and animations. Box-shadows and filters.

That being said, what you _really_ should be spending your time optimizing is not the CSS but your heavy images, too many file requests which could be concatenate, your server setup and database queries etc.

## Selectors are read right to left

Yes. Writing `#Batman a` will first find all `a` elements and then filter for those that are a descendant of an `id` called Batman. It would be better to write a simpler selector as `a.Batman-link` or even better `.Batman-link`.

## More about CSS performance

- [CSS selector performance has changed for the better](http://calendar.perfplanet.com/2011/css-selector-performance-has-changed-for-the-better/)
- [Gone in 60 frames per second (talk from Paul Irish)](http://dl.dropbox.com/u/70775642/talks/performance/jqueryto/slides/index.html#1)
- [Tips for smooth scrolling web pages (talk form Edge conf)](http://chrislord.net/index.php/2013/02/11/tips-for-smooth-scrolling-web-pages-edgeconf-follow-up)
