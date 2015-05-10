---
layout: post
title: Sizing with rem
date: 2012-01-12
tags: ["CSS","css-rem","Front-end"]
---

Usually font sizing is done with either the `px` or the `em` unit. Unlike the `px` unit, `em` is relative to the `font-size` inherited by the element. This is great and has a lot of advantages, however things can get messy as you nest your elements. This brings us to the rem unit, which is equal to the computed value of `font-size` on the root element. Sounds like the magic solution and in many ways it actually is. [Browser support](http://caniuse.com/#feat=rem) is very good with IE9+.

### See more

*   [Relative Lenghts on the W3](http://www.w3.org/TR/css3-values/#relative-lengths)
*   [Jonathan Snook on rem](http://snook.ca/archives/html_and_css/font-size-with-rem)
*   [Font sizing with rem could be avoided](http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/)