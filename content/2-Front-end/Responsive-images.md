# Responsive and adaptive images

Why should a 320px wide smartphone load the same 1920px wide image a huge desktop monitor would need?

## Specifying what you want

Adaptive (or responsive) images here means different images for different devices. The [<picture> spec](http://www.w3.org/TR/2013/WD-html-picture-element-20130226/) is still in progress but while we wait there is [scottjehl/picturefill](https://github.com/scottjehl/picturefill) which mimics the proposed spec.

## Getting what you want

When your front end is asking for different (sizes of) images you also need to have them. Generating everything manually would become very tedious so you need some automation.

- http://www.iandevlin.com/blog/2013/10/responsive-web-design/resimagecrop-a-responsive-image-solution

This is a server side solution that will return a responsive image based on the variables passed through as a part of the query string.

## Resources

- http://dev.opera.com/articles/responsive-images/
- http://www.w3.org/TR/2013/WD-html-picture-element-20130226/
- http://www.iandevlin.com/blog/2013/10/responsive-web-design/resimagecrop-a-responsive-image-solution
- http://css-tricks.com/which-responsive-images-solution-should-you-use/
- http://blog.cloudfour.com/sensible-jumps-in-responsive-image-file-sizes
- https://github.com/scottjehl/picturefill
- https://github.com/BBC-News/Imager.js


srcset - Images to use in different situations (e.g. high-resolution displays, small monitors, etc)
sizes - Image sizes between breakpoints

1. Define a list of image resources
2. Specify their physical dimensions i.e. width in pixels


## Fixed width image with support for DPR

<img src="cat-500px.jpg"
	srcset="cat-750px.jpg 1.5x, cat-1000px.jpg 2x"
	width="500px" alt="">

Here, the same image will be displayed in a 1920px wide screen and a 320px screen. Only DPR will change the image.

