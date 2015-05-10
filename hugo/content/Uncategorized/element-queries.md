---
layout: post
title: Element queries
date: 2013-07-04
tags: ["CSS","element queries","Front-end","Media Queries","Responsive"]
---

[Media queries](https://developer.mozilla.org/en-US/docs/Web/Guide/CSS/Media_queries) make it possible to limit the scope of CSS to a certain screen width, orientation, aspect ratio and other media features. All of these options are relative to the full browser window, the viewport. Not element queries.

With a fluid design your elements will have different and unknown sizes on different screens and devices. With media queries you can react to the size of the viewport. What you can &#95;not&#95; react to is the width of the element itself in its current context. What you want to react to is the width of the element itself, not the viewport.

## Enter element queries

Element queries is a concept that does exactly this. It is however not (yet) an accepted standard and as such only exists as polyfills for now. Element queries allows you to sculpt your CSS with much finer detail.

### Resources

*   [Media queries are not the answer](http://coding.smashingmagazine.com/2013/06/25/media-queries-are-not-the-answer-element-query-polyfill/)
*   [filamentgroup/scoped-media-query](http://github.com/filamentgroup/scoped-media-query)
*   [tysonmatanich/elementQuery](http://github.com/tysonmatanich/elementQuery)