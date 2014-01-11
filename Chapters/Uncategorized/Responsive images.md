# Responsive and adaptive images

Why should a 320px wide smartphone load the same 1920px wide image a huge desktop monitor would need?

## Specifying what you want

Adaptive (or responsive) images here means different images for different devices. The [<picture> spec](http://www.w3.org/TR/2013/WD-html-picture-element-20130226/) is still in progress but while we wait there is [scottjehl/picturefill](https://github.com/scottjehl/picturefill) which mimics the proposed spec.

## Getting what you want

When your front end is asking for different (sizes of) images you also need to have them. Generating everything manually would become very tedious so you need some automation.

- http://www.iandevlin.com/blog/2013/10/responsive-web-design/resimagecrop-a-responsive-image-solution

This is a server side solution that will return a responsive image based on the variables passed through as a part of the query string.

### See more

- http://www.w3.org/TR/2013/WD-html-picture-element-20130226/
- https://github.com/scottjehl/picturefill
- http://www.iandevlin.com/blog/2013/10/responsive-web-design/resimagecrop-a-responsive-image-solution
- https://gist.github.com/Wilto/27d6925e8c1a71a87a03
comparison of picture and src-n
- http://foundation.zurb.com/docs/components/interchange.html
- http://css-tricks.com/which-responsive-images-solution-should-you-use/
- https://github.com/BBC-News/Imager.js
- http://blog.cloudfour.com/sensible-jumps-in-responsive-image-file-sizes
- http://html5doctor.com/responsive-images-end-of-year-report/
