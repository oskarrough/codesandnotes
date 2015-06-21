---
title: Scaling components
date: 2013-09-22
---

Here's a very useful technique for adding another level of scalability in your components. Let me quickly recap how pixels, em and rem work in terms of scaling.

`Pixels` only scale with the browser zoom which leaves you very good precision and almost no flexibility. `EM` scales relative to the parent element which allows for very flexibile scaling but as your modules starts to nest deeper things get confusing, although a CSS preprocessor can alleviate it. `REM` scales to the root element, e.g. , which elimits the confusion of ems while limiting your scaling to a single level.

Now, if you change the `font-size` of the root element (which is `<html>`) every single module scaled with `em` or `rem` will scale accordingly. Said in another way, everything scales only to that single element, that single level.

## Adding another level of scaling

Assuming a module consists of a wrapper and one or more child elements you set the base (font) size of the module in rem. Now the module scales with the root level. All child elements of your module will use `em` values which allows them to scale with the size of your module wrapper. This way you will have two levels of scalability.

* * *

Need to give this some more thought. What do we really need? Is this flexibility needed at all?

### References

- [Modern CSS sizing advice](http://codesandnotes.com/modern-css-sizing-advice/)
- [Sizing (Web) components](https://medium.com/p/8f433689736f)
