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

## Compressive Images

[Compressive Images ' Filament Group](http://filamentgroup.com/lab/rwd_img_compression/).

> Daan Jobsis shared the following premise: when considering a jpeg image's file size, the level of compression makes more of a difference than its physical dimensions. In other words, given two identical images that are displayed at the same size on a website, one can be dramatically smaller than the other in file size if it is both highly compressed and dramatically larger in dimensions than it is displayed.

**Update**
[http://dh.karelia.com/retina/](http://dh.karelia.com/retina/) (A super comparison tool)
[http://jsbin.com/egazaw/18](http://jsbin.com/egazaw/18) (A test case)

## References

- http://jamiemason.github.io/ImageOptim-CLI/
- http://www.splashnology.com/article/how-to-optimize-png-and-jpeg-without-quality-loss-part-1/2071/
- http://www.smashingmagazine.com/2009/07/15/clever-png-optimization-techniques/
- http://www.codinghorror.com/blog/2007/03/getting-the-most-out-of-png.html
- http://perishablepress.com/png-image-optimization/
- http://addyosmani.com/blog/image-optimization-tools/
- http://calendar.perfplanet.com/2013/browser-specific-image-formats/
- https://github.com/pornel/mediancut-posterizer
