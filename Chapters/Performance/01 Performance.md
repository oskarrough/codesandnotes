# Performance on the web

If there's one thing you can do to improve user-experience on a site it is making it fast. It isn't optimizing your media queries or making images fade smoother. It is making it fast. The money tells us that speed is more important than aesthetics. I'd argue otherwise but then again I'm not the money. This is an overview of performance on the web.

## Minimize HTTP Requests

A browser can only download so many files at a time and since HTTP requests (the browser asking for a file) is one of the biggest performance penalties, a site with lesser files will be faster. Reduce HTTP requests to an absolute minimum.

## File concatenation

A great way to minimize requests is to merge files into a single one. All your styles in one, all your scripts in another and so on. This is called file concatenation.

## File minification

There are many tools to minimize your files. That means stripping whitespace, linebreaks, unessesary characters, renaming variable names and much more. There are plenty online tools that can do this for you but that's not very practical. Instead you could use a build tool like Grunt or Gulp but that's for another chapter. There are also GUIs for all of this like [CodeKit](https://incident57.com/codekit/) or [Hammer](http://hammerformac.com/).

## Caching

@todo write this

A very good software for this is [gzip](http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/).

## CDN

Browsers have a limit of how many files they can download in parallel per domain. This is the main reason we do file concatenation. We can further improve load by distributing files on several (sub)domains to circumvent this limit. Instead of setting up all those domains you can use a content delivery network (CDN) service. [MaxCDN](http://www.maxcdn.com/) and [Cloudflare](http://www.cloudflare.com/) are to examples.

- Serve site assets from multiple domains?
- Why? How many resources will a browser download from a given domain at a time?

## Sprites

Sprites also help reduce HTTP requests and reduces electricity use by up to 76%.

[Read more about CSS sprites and icons](http://codesandnotes.com/css-sprites-and-icons)

## Image optimization

Optimize your images. Lots of bites can easily be shaved off images without ruining image quaility too much.

[Read more about image optimization](http://codesandnotes.com/image-optimization)

## Don't use stuff you don't need

All of these tips are about optimizing the content you already have. If you didn't have any files or content, you'd be great! Wouldn't that be easy. In other words, remove all that you don't need. Perhaps there are some scripts lying around that you aren't even using?

## Perceived performance

There are two sides to performance: actual and percieved. So far we've only talked about actual performance but just as important is perceived performance. Using clever UX tricks you can make your site _feel_ faster.

[Read more about perceived performance](http://codesandnotes.com/perceived-performance)

## Tools

You can follow all these steps and recommendations blindly or you could use tooling to debug what is really slowing down your site.

[Google PageSpeed](https://developers.google.com/speed/pagespeed/) can analyze your site through their website but the browser extensions available for Chrome and Firefox are more handy.

[Yahoo's YSlow](http://developer.yahoo.com/yslow/) is very similar but provides some great second opinions. The Yahoo team also did us a favor of writing the excellent [Best Practices for Speeding Up Your Web Site](http://developer.yahoo.com/performance/rules.html). Really you should stop reading this and go there instead.

[Pingdom](http://tools.pingdom.com/fpt/) can also analyze your website speed

## Script performance

Another aspect is the runtime performance of your code. JavaScript can slow your site down if not used properly. Fancy CSS animations and transforms that are modified on scroll is often not done right resulting in a very janky experience.

### See more

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
http://blog.fogcreek.com/we-spent-a-week-making-trello-boards-load-extremely-fast-heres-how-we-did-it/
