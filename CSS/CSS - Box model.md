# The CSS box model

> In a document, each element is represented as a rectangular box. Determining the size, properties — like its color, background, borders aspect — and the position of these boxes is the goal of the rendering engine.

> In CSS, each of these rectangular boxes is described using the standard box model. This model describes the content of the space taken by an element. Each box has four edges: the margin edge, border edge, padding edge, and content edge.

Four things affect the size of an element. Content first, then padding, then borders and lastly margins.

If you have defined a width for the element, say 1em, the other properties (padding, border and margin) will **add** to the element's width.

```css
/* This element will be 14em wide */
.Element {
	width: 10em;
	padding: 1em;
}
```

This might not be what you expect but is no matter the default of the web's box model. However, you are able to change the way it works using box-sizing.

Also see the [box model documentation on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/box_model).

## Box sizing

By default box-sizing will be 'content-box'. There are three values:

`'content-box'` --> width and height does not include padding and borders.  
`'padding-box'` --> width and height includes padding, but not border.  
`'border-box'` --> width and height includes padding and border.  

```css
/* This element will still be 10em wide */
.Element {
	box-sizing: border-box;
	width: 10em;
	padding: 1em;
}
```

## Summary

- Everything is a box
- Every box has content, padding, border and margin that affect the size
- By default, properties will add to the size of an element
- Using box-sizing: border-box; you can ensure only the width

**References**
- https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing
- https://developer.mozilla.org/en-US/docs/Web/CSS/Visual_formatting_model
- http://docs.webplatform.org/wiki/guides/the_css_layout_model
