# CSS (Cascading Style Sheets)

Cascading, inheritance, selectors and their specificity. This section is about best practices and our experience with structured oocss.

	> Work with CSS, not against it. (source: http://www.stubbornella.org/content/2012/05/02/cross-browser-debugging-css)

## CSS 101

- The box model
- floats
- margin, padding, line-height
- units (px, em, rem, % for starters)
- colors
- typography
- browser landscape
- media queries

## CSS structure

Most of this is inspired by the BEM Method and SMACSS.

Base, layout, module and theme. These are the layers we use to divide our css.

### Base

- Config (variables for color, typography and layout)
- Mixins
- Elements (customized normalize.css)

### Layout

- Helpers
- Grid

### Module

- Navigation etc.

### Theme

- Most won't need this.

## CSS Sizing

Percent is wacky in CSS: Top/bottom padding = % of width. Height = % height of container. Line-height = % of font-size. Too prescriptive.
- http://code.hopeglory.com/technique/modern-css-sizing-advice

## CSS Line-height

- http://www.slideshare.net/maxdesign/line-height

## CSS Typography

- http://nicewebtype.com/notes/responsive-typography/
- http://typecast.com

## CSS Methods

Here's a list of methods often used with CSS.

### Box-sizing

Alternatively, we can apply the * { box-sizing: border-box; } method and be fine without the extra container.
- http://paulirish.com/2012/box-sizing-border-box-ftw
- https://github.com/Schepp/box-sizing-polyfill

### Mediablock

- http://www.stubbornella.org/content/2010/06/25/the-media-object-saves-hundreds-of-lines-of-code/
- http://jsfiddle.net/2jc9L/
- http://jsfiddle.net/necolas/rZvEF/
- http://groups.google.com/group/object-oriented-css/browse_thread/thread/c5b53078b5e3bb39?pli=1

### Image-replacement (ir)

- http://css-tricks.com/examples/ImageReplacement/

### Word-wrapping

css methods - word-wrapping
- http://www.quirksmode.org/oddsandends/wbr.html
- http://blog.kenneth.io/blog/2012/03/04/word-wrapping-hypernation-using-css/

### OOCSS
- http://www.vanseodesign.com/css/object-oriented-css/
- https://github.com/csswizardry/CSS-Guidelines
- https://gist.github.com/3822990
- https://github.com/necolas/suit/
- https://github.com/csswizardry/inuit.css
- https://github.com/necolas/idiomatic-css
- http://blog.millermedeiros.com/solid-css/

If a submodule changes the layout or positioning of it's parent and base module, consider creating a new module instead.

## Grids

margin on left or right or negative columns only on children?

- http://gridpak.com/
- http://www.gridsetapp.com/

### Grid

This grid's two basic components are 'grids' and 'units'. A grid always contains one or more units and these units should always be direct children.

## Responsive webdesign

Responsive webdesign.

## Feature detection

Every browser supports different properties in different ways. It's a lot better than it was ten years ago but still there's work to do.
Feature detection vs browser detection

- http://caniuse.com
- http://html5please.us
- https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills

Enter [Modernizr](http://www.modernizr.com).

### See more

- https://github.com/Modernizr/Modernizr/wiki/HTML5-Cross-browser-Polyfills
- http://html5please.us
- http://caniuse.com
- http://www.modernizr.com
- http://sassmeister.com/
