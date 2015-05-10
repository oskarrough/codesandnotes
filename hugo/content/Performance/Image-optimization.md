---
title: "Image optimization"
---

Any website should be fast. No one likes waiting and images are one of the major slowdowns online. So, you should always optimise your images. Here are some ways to do it.

Find some links explaining color depths, bits, alpha channels and it's relation to file size.

## PNG

You can optimize images directly via Terminal (say with [OptiPNG](http://optipng.sourceforge.net/) or [Pngcrush](http://pmt.sourceforge.net/pngcrush/))but for most people it's easier to use software with a gui.

Like these:

- [ImageOptim](http://imageoptim.com/)
- [Trimage](http://trimage.org/)
- [PunyPNG](http://www.punypng.com/)
- [Smush it](http://www.smushit.com/ysmush.it/)
- [Jpeg mini](http://www.jpegmini.com/main/home)

### Optimizing PNGs with pngcrush

$ brew install pngcrush
$ pngcrush -rem alla -nofilecheck -reduce -m 7 (YOURFILE).png (OPTIMIZEDFILE).png

Should help a lot

#### See more

- http://jamiemason.github.io/ImageOptim-CLI/
- http://www.splashnology.com/article/how-to-optimize-png-and-jpeg-without-quality-loss-part-1/2071/
- http://www.smashingmagazine.com/2009/07/15/clever-png-optimization-techniques/
- http://www.codinghorror.com/blog/2007/03/getting-the-most-out-of-png.html
- http://perishablepress.com/png-image-optimization/
- http://addyosmani.com/blog/image-optimization-tools/
- http://calendar.perfplanet.com/2013/browser-specific-image-formats/
- https://github.com/pornel/mediancut-posterizer

