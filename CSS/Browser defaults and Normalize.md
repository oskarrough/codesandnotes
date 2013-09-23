# Browser defaults, Normalize and why you would want it
All browsers come with predefined CSS rules that styles the default elements.
For instance, the `<h1>` element often has the following rules:

`h1 { display: block; font-size: 2em; font-weight: bold; }`

These things are often taken for granted (and should be). Without it, every element would lose it's visual meaning, effectively rendering it useful only to computers.

A problem with the default browser styles is that every browser vendor is not using the same ones. Let me give you an example from [Normalize.css](http://necolas.github.com/normalize.css/):

```css
/* Address style set to `bolder` in Firefox 4+, Safari 5, and Chrome. */
b,
strong {
	font-weight: bold;
}
```

Apparently using `b` or `strong` isn't only `bold` it can also be `bolder`. While this example difference isn't too huge the important thing is that you never really know and this is why Normalize.css is a great starting point for your projects.

## Introducing Normalize.css
Normalize.css is a relatively small .css file you can include at the start of your projects to close the gaps between browser defaults so you won't have to think about it yourself.

> Normalize.css makes browsers render all elements more consistently and in line with modern standards. It precisely targets only the styles that need normalizing.

> Normalize.css is a small CSS file that provides better cross-browser consistency in the default styling of HTML elements. It’s a modern, HTML5-ready, alternative to the traditional CSS reset.


Sold.

**References**
- [Normalize.css](http://necolas.github.com/normalize.css:/)
