---
title: Writing CSS for RTL websites
date: 2012-11-06
tags: ["Bidirectional","CSS","Front-end","Multilingual","RTL"]
---

In a project I worked on we wanted to support bidirectional (or bidi) text, like Arabic or Hebrew.

When a website is designed in a LTR world, suddenly changing it to RTL causes all sorts of problems. All solvable, though. You have to be careful about sprite positions, form design, floats as well as margin/paddings related to those floats. If you're using a CSS preprocessor like Sass (or stylus or whatever) you can utilize small mixins to make the process easier.

## RTL mixin

Assuming we've defined the `dir` attribute on the HTML element we can target styles using that selector.

<pre>@mixin rtl {
    [dir="rtl"] & {
        @content;
    }
}

.Component {
    // ltr styles
    float: left;
    margin-right: 1rem;

    // rtl styles
    // change directions and reverse the margin
    @include rtl {
        float: right;
        margin-right: auto;
        margin-left: 1rem;
     }
}
</pre>

Also, remember that browser defaults change as the direction does which means some things are already taken care for for you.

### See more

- [24 ways: Going Both Ways](http://24ways.org/2011/going-both-ways)
