---
title: Chained or prefixed classes?
date: 2014-01-06
tags: ["Architecture","CSS","Naming convention"]
---

For bigger projects the nature of CSS's cascading rules can cause havock. You have to think about how you scope your styles, how to limit the inheritance. Using either chained or prefix classes can help avoid problems.

Example of chained classes: `<div class="Component is-big">`. With chained classes you need more than one class to scope the CSS to the base component you want to apply it to. It would look like this: `.Component.is-big`.

Example of prefixed classes: `<div class="Component Component--big">` which you select with only one class `.Component--big`.

See the difference? Prefixed classes minimize CSS specificity since you only have to use one class selector. We know for sure that `.Component` is the base and `.Component--big` is the modifier.

### Resources

- [Scope CSS classes with prefixes](http://markdotto.com/2012/02/16/scope-css-classes-with-prefixes/)
