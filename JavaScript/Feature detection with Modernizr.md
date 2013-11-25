# Feature detection with Modernizr

**Not all features of the web are supported equal. The web is young and in flux. Things change, things break.**

The beginner would check for browser support of your feature using for instance caniuse.com. If you look at [the support for CSS 2D Transforms](http://caniuse.com/transforms2d) you will learn that IE older than version 9 have no support.

Now, you could 'browser sniff' and see your users browser and write some code that makes sure your site works without this feature. The problem with this method is that you don't base your code on the feature in question but a specific browser version. Browser sniffing can go wrong and (most) browsers get updated. It's just not a very reliable method.

Instead, you could and probably should use feature detection!

[Modernizr.js](http://modernizr.com/) "is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser".

	Taking advantage of cool new web technologies is great fun, until you have to support browsers that lag behind. Modernizr makes it easy for you to write conditional JavaScript and CSS to handle each situation, whether a browser supports a feature or not. It’s perfect for doing progressive enhancement easily.

## Example

**Task:** Rotate an element 90 degrees
**First solution:** `css div { transform: rotate(90); }`

This will do the job, but what if the browser does not support CSS transforms? In most cases, nothing happens as the browser happily just ignores the rule but now we when the element isn't rotated the design doesn't work anymore. We need a fallback. Enter Modernizr.

We need Modernizr to feature detect for CSS transforms so we can progressively enhance our element. This means that we will first write the code for a design without transforms and enhance with code for a design with transforms using the class modernizr automatically adds to the <html> element.

It will look something like this:

`<html lang="en" dir="ltr" class="js no-touch postmessage history multiplebgs boxshadow opacity cssanimations csscolumns cssgradients csstransforms csstransitions fontface localstorage sessionstorage svg inlinesvg no-blobbuilder blob bloburls download formdata">`

All these classes indicated what is currently supported in the browser loading the page.

In our case, the browser does support CSS transforms as indicated by the `csstransforms` class.

**New solution**

```css
div {
	/* code that makes it look good without the rotate */
}
.csstransforms div {
	transform: rotate(90);
	/* code that makes it look even better now that we support rotate */
}
```

This way you will have used feature detection to make sure your design looks good no matter what is supported.

Win.

## How it really works

dsa

	Modernizr runs quickly on page load to detect features; it then creates a JavaScript object with the results, and adds classes to the html element for you to key your CSS on. Modernizr supports dozens of tests…


## Customizing Modernizr

You can use Modernizr out of the box and feature detect for every possible feature but you the smart developer would never do that. You are going to build a customized version of Modernizr.js that only tests the features you are actually using.

Less tests, less work, less bytes, better performance.

You can build your own production-ready Modernizr at [modernizr.com/download](http://modernizr.com/download/).

### References

- http://modernizr.com/download/
- http://modernizr.com/resources/
