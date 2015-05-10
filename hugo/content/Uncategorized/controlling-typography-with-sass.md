---
title: Controlling typography with Sass
date: 2013-03-12
tags: ["CSS","Front-end","Sass","Web typography"]
---

Sass' [@extend](http://sass-lang.com/docs/yardoc/file.SASS_REFERENCE.html#extend) feature is great for applying different typographic styles but [be careful](http://8gramgorilla.com/mastering-sass-extends-and-placeholders/) about [the output](http://thesassway.com/articles/sass-doesnt-create-bad-code-bad-coders-do).

Using `%placeholder` instead of `.class` makes sure that the placeholder isn't outputted into the css.

<pre class="theme:github lang:sass decode:true crayon-selected">%font-header {
    font-family: Georgia;
    font-weight: 600;
    line-height: 1.2;
}
%font-body {
    font-family: Arial;
    line-height: 1.4;
}
html {
    @extend %font-body;
}
h1,
h2,
h3,
h4 {
    @extend %font-header;
}</pre>


