---
title: Understanding The CSS Box Model
---

It is important to understand how elements are rendered. How those CSS properties you write magically turn into beautiful shapes. Well, boxes. Every element on your page is a rectangular box. Even if it looks like a circle, it's a box. This `box-model` is what browsers use to calculate the total width and height of an element.

## How is the size calculated?

The way the box model is calculated is called `box-sizing` and it has a default value of `content-box`. This content-box does not include padding and borders in the width and height of an element. This means an element with a set width of 100px will not necessarily have a total, calculated width of a 100px. If the borders total 2px (e.g. 1px on each side), the borders are added to the width which will result in a total width of 102px. Padding adds to the size in the exact same way.

This might not be what you expect but it _is_ the default way everything is calculated on the web anyway. The size is calculated in a specific order. First the box is expanded as much as possible to contain the content. Then width and height to constrain the box, then padding, then borders and lastly margins.

Read that again, please.

> Remember, if you don't specify a width or height, block elements default to the full width of the window and as heigh as the content. Inline elements snaps tightly to the content.

![Octopus](/images/illustrations/liloctopus-web2.jpg)

## Different box models with box-sizing

The box-sizing property has three different values to choose from: `content-box`, `padding-box` and `border-box`. We just learned that the default `content-box` adds padding and borders to the width and height. The `padding-box` value also includes padding to the total size, but not border. The `border-box` value includes both padding and border to the size.

## An example

    div {
        width: 100px;
        padding: 10px;
      margin: 10px;
        border: 1px;
    }

With `content-box`, the div will have a width of 1px + 10px + 100px + 10px + 1px = 122px. With `padding-box`, the div will have a width of 10px + 100px + 10px = 120px. With `border-box`, the div will have a width of 100px.

## Setting border-box as the default

Which one makes the most sense for you? Probably the last one, `border-box`, as the total width is also the width you defined. The padding and borders will be placed inside the box unlike `content-box` which will place them outside. This is why many people, including me, recommend changing the `box-sizing` to `border-box` for all elements like this:

    * {
        box-sizing: border-box;
    }

## Browser support

One important thing to note is that browsers, sadly, interpret these rules differently. While it is now much, much better, Internet Explorer 8 treats `border-box` as `content-box` which will ruin your layout. If you have to support IE8, I would still recommend changing to border-box but you will have to write extra styles to compensate. Styles like `width: 100%; padding: 2em;` are especially problematic without border-box calculation.

- [Browser support for box-sizing](http://caniuse.com/css3-boxsizing)

## Summary

- Everything is a box
- Every box has a width and height as well as content, padding, border and margin
- By default, content-box means padding and borders are added to the size
- Border-box is easier to use as the padding and borders are placed inside the width and height.

### References

- [box model documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model).
- [box-sizing documentation](https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing)
- [The visual formatting model](https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model)
- [The CSS layout model](http://docs.webplatform.org/wiki/guides/the_css_layout_model)
