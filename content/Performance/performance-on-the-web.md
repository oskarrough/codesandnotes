---
title: Performance on the web
weight: -99
---

If there's one thing you can do to improve user-experience on a site it is making it fast. It isn't optimizing your media queries or making images fade smoother. It is making it fast. The money tells us that speed is more important than aesthetics. I'd argue otherwise but then again I'm not the money. This is an overview of performance on the web.

When you're dealing with a web server *serving* files, you should at least consider these four techniques:

1. Minimize HTTP Requests: A browser can only download so many files at a time and since HTTP requests (the browser asking for a file) is one of the biggest performance penalties, the less requests you make, the faster it'll get.

2. File concatenation is a great way to minimize requests. It basically means merging multiple files into a single one. All your styles in one, all your scripts in another and so on. Unless you're using HTTP2. Yeah.

3. File minification — once your files are concatenated, you can minify them. That means stripping whitespace, linebreaks, unessesary characters, renaming variable names and much more. There are plenty online tools that can do this for you but that's not very practical. Instead you could use a build tool like Grunt or Gulp but that's for another chapter. There are also GUIs for all of this like [CodeKit](https://incident57.com/codekit/) or [Hammer](http://hammerformac.com/).

4. Caching - by leveraging caching you can avoid sequential requests. The browser has a handy cache but there are also database caching, local storage etc.

## CDN

Browsers have a limit of how many files they can download in parallel per domain. This is the main reason we do file concatenation. We can further improve load by distributing files on several (sub)domains to circumvent this limit. Instead of setting up all those domains you can use a content delivery network (CDN) service. [MaxCDN](http://www.maxcdn.com/) and [Cloudflare](http://www.cloudflare.com/) are to examples.

- Serve site assets from multiple domains?
- Why? How many resources will a browser download from a given domain at a time?

## Don't use stuff you don't need

All of these tips are about optimizing the content you already have. If you didn't have any files or content, you'd be great! Wouldn't that be easy. In other words, remove all that you don't need. Perhaps there are some scripts lying around that you aren't even using?

## Perceived performance

There are two sides to performance: actual and percieved. So far we've only talked about actual performance but just as important is perceived performance. Using clever UX tricks you can make your site _feel_ faster. Read more about [perceived performance](/performance/perceived-performance)

## Tools

There are tons of great tools to help you analyze bottlenecks on your site.

- [Google PageSpeed](https://developers.google.com/speed/pagespeed/) can analyze your site through their website but the browser extensions available for Chrome and Firefox are more handy.
- [Yahoo's YSlow](http://developer.yahoo.com/yslow/) is very similar but provides some great second opinions. The Yahoo team also did us a favor of writing the excellent [Best Practices for Speeding Up Your Web Site](http://developer.yahoo.com/performance/rules.html). Really you should stop reading this and go there instead.
- [Pingdom](http://tools.pingdom.com/fpt/) can also analyze your website speed
- https://www.sitespeed.io provides automated tests using node
- https://gtmetrix.com
- https://www.webpagetest.org
- https://developers.google.com/web/tools/lighthouse

## Script performance

Another aspect is the runtime performance of your code. JavaScript can slow your site down if not used properly. Fancy CSS animations and transforms that are modified on scroll is often not done right resulting in a very janky experience.

### Resources

- http://perf.fail/
- [Awesome Web Performance Optimization](https://github.com/davidsonfellipe/awesome-wpo)
- http://adactio.com/journal/5439/
- http://allinthehead.com/retro/361/how-to-make-your-website-fast
- http://www.askapache.com/htaccess/speed-up-sites-with-htaccess-caching.html
- http://backbonetutorials.com/seo-for-single-page-apps/
- https://developers.google.com/speed/tools?hl=de
- http://csswizardry.com/2013/01/front-end-performance-for-web-designers-and-front-end-developers/
- http://www.mobify.com/blog/beginners-guide-to-perceived-performance/
- http://www.phpied.com/rendering-repaint-reflowrelayout-restyle/
- https://developers.google.com/speed/pagespeed/
- http://stevesouders.com/hpws/
- https://github.com/One-com/assetgraph
- http://blog.fogcreek.com/we-spent-a-week-making-trello-boards-load-extremely-fast-heres-how-we-did-it/
- https://css-tricks.com/prefetching-preloading-prebrowsing/
