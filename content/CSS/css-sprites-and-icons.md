---
title: "Icons and sprites"
---

## Problem

If your site uses 50 icons you don't want 50 HTTP requests. You want to merge those icons into one single image, an icon sprite, reference it as a CSS background-image and control the background-position so only the relevant icon is visible.

Manually creating sprites is super boring. What you want is a robot that creates it for you and gives you all the X and Y position values while keeping them up-to-date if any new icons are added.

TODO

- What are sprites.
- Why would I want it.
- How do you do it
- Image replacement techniques

## Enter Grunticon

### References

- http://filamentgroup.com/lab/bulletproof_icon_fonts/
- http://developer.yahoo.com/performance/rules.html#opt_sprites
- http://compass-style.org/reference/compass/utilities/sprites/
- http://codesandnotes.com/css-sprites-and-icons
- http://iconizr.com/ & https://github.com/jkphl/iconizr
- https://github.com/filamentgroup/grunticon
- https://github.com/Ensighten/grunt-spritesmith
- https://github.com/FWeinb/grunt-svgstore
- http://glue.readthedocs.org/
- http://yostudios.github.io/Spritemapper/
- https://github.com/jakesgordon/sprite-factory
