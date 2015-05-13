---
title: Sticky elements
date: 2013-04-25
tags: [jquery waypoint","method","sticky element"]
---

Sometimes you want to alternate between fixed and normal flow for elements. Think of a sidebar that scrolls with the page from a certain point and stops at another. The CSS property `position: sticky;` [is on the way](http://updates.html5rocks.com/2012/08/Stick-your-landings-position-sticky-lands-in-WebKit) but until we can rely on that, here's a solution with [jQuery Waypoints](http://imakewebthings.com/jquery-waypoints/) that makes it "_easy to execute a function whenever you scroll to an element_".

<!--more-->

As easy as it might be it can still be confusing to know exactly how to stop a fixed element from scrolling on

Here's a working example: [http://jsfiddle.net/oskarrough/SFyCj/](http://jsfiddle.net/oskarrough/SFyCj/)

Basically, it works like this:

1.  <span style="line-height: 17px;">Define a waypoint for the sticky element (use the 'sticky' shortcut method that the plugin provides)</span>
2.  Define a waypoint for the element that should stop the sticky element
3.  Adjust the second waypoint with the offset.top for the element minus the height of the sticky element.
4.  Profit.

But check the example, I've made sure there are lots of comments.
