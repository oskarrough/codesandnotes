---
layout: post
title: Understanding browser styles and Normalize
date: 2014-01-09
tags: ["Cross-browser","CSS","Front-end"]
---

All browsers add default CSS styles to web pages, so called 'user agent styles'. This is what makes a `<button>` actually look like a button. This is what creates the margin between paragraphs and headers and so on. This article will talk about how to deal with the issues they bring.

If the browser didn't come with any default styles and you didn't add any more styles, nothing would set the HTML elements apart. They would lose their visual meaning. But it does some with default styles. Unless you are happy with these styles, you are going to embark on a journey to with your own design.

For instance, the `<h1>` element come with the following rules in my current browser:

    h1 {
        display: block;
        font-size: 2em;
        font-weight: bold;
    }

This might be exactly the design you are looking for but chances are it's not. There is no way to avoid user agent styles but you can overwrite them.

## User agent styles are not the same in every browser

This means all elements are not going to look the same in all browsers without some extra work. You never really know what browser styles are being added but luckily other people know and have created a consistent, cross-browser foundation for writing your own styles. There are generally two approaches to this.

## The CSS reset viking

One approach is the _CSS reset_. You brutally target every single existing HTML element and reset all properties, effectively normalizing the styles through different browsers. Meyerweb famously created this technique in 1997. It's a single CSS file that you include before your own styles. Look at the code here http://meyerweb.com/eric/tools/css/reset/reset.css.

## The Normalize.css surgeon

[Normalize.css](http://necolas.github.com/normalize.css/) is also a CSS file you include before your own styles. The difference being it meticulously target specific differences between browsers and styles and set them to a common, sensible default value. It doesn't target everything and it doesn't set everything to 0. It precisely targets the styles that need normalizing.

It helps to base your styles on top of something more consistent and cross-browser. Normalize.css and the CSS reset both tackle this problem but in different ways. One more brutal, one more gentle and precise. Use what you need. Don't be afraid to edit to fit your own project.