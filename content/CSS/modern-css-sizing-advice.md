---
title: Modern CSS Sizing Advice
---

As if it weren't enough with centimeters and inches we have quite a few different CSS units. They all have their pros and cons so when do you use which one? This is an approach we've been using on many projects with success. This is not to say that you can't use pixels for everything, of course you can. But there is a better way.

### Percentage for layout and columns

Allows you to think in ratios, not in fixed sizes. Consider a sidebar, should it be 200px or rather fill up one fifth (1/5 = 20%) of the screen?

### Rem for components

REM scale only relative to the root element (the element) which makes it a lot less confusing than EM and very handy for adding another level of scalability to your modules. Support from IE9+. Usually font sizing is done with either the

`px` or the `em` unit. Unlike the `px` unit, `em` is relative to the `font-size` inherited by the element. This is great and has a lot of advantages, however things can get messy as you nest your elements. This brings us to the rem unit, which is equal to the computed value of `font-size` on the root element. Sounds like the magic solution and in many ways it actually is. [Browser support](http://caniuse.com/#feat=rem) is very good with IE9+.
</p>

### Em for component children

Since em is relative to the parent font-size it makes the ideal candidate for values that are directly related to typography. You probably want your margins to be relative to the size of the type. A 40px header shouldn't have the same margin as a 12px one. With EM this is not an issue.

### Pixels for when you can't use any of the above

No, but really. In this retina-dpi-apocalypse-world it's safer and better to work with the technologies instead of against them. Scalable units as rem and em allow you to easily create [scalable components](http://codesandnotes.com/scaling-components/). Of course, when working with non-scalable icons, images or other absolute layouts, the world isn't black or white.

Last bit of advice, if you can avoid defining any sizes, you'll have less issues.

### Resources

- [Relative Lenghts on the W3](http://www.w3.org/TR/css3-values/#relative-lengths)
- [Jonathan Snook on rem](http://snook.ca/archives/html_and_css/font-size-with-rem)
- [Font sizing with rem could be avoided](http://csswizardry.com/2011/05/font-sizing-with-rem-could-be-avoided/)
