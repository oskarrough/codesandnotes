---
title: Improving initial render time
---

Even though a feature-heavy page might need more than ten seconds to fully load, we can improve the initial render time by lazy-loading non-critical assets. Or in non technical terms: the website loads the bare minimum to render the first visible screen as fast as possible.

This is extremely important not only to keep a smooth navigation flow throughout the website but to keep the user’s interest.
Responsive images and svgs
In our retina-filled mobile world there are more devices and screen sizes than we could possibly list. This means our designs and layouts need to be flexible and always look sharp. To do this we want to convert all older assets (icons) to the SVG format which scales as needed.

Another aspect is that we want all CYBEX images to be crisp and high quality. To do this we need to deliver images that fit perfectly to the user’s device. But of course we should not force a 3000px image down on a mobile phone. Responsive images alleviate this issue by delivering the image size best suited (dimensions and network) to the user’s device.

Images served by a global content delivery network (CDN)

To avoid resizing one-billion images ourselves and we want to implement an image CDN like imgix or cloudinary. With any of these services you upload a master image in the highest possible quality. The service then resizes, crops and gives you back whatever image size you need, served from a global CDN.

## Critical CSS

