---
title: Exluding favicons from Ember CLI fingerprinting
date: 2014-11-16
tags: ['ember-js']
---

If there are files you don't want fingerprinted using ember-cli, like favicons, you can use this inside your `ember-cli-build.js` (previously called `Brocfile.js`):

```JavaScript
app = new EmberApp({
	fingerprint: {
		exclude: ['apple-touch-icon', 'favicon', 'mstile']
	}
});
```

It will exclude any file matching any part of what you specify. So it'll also match 'android-chrome-96x96.png' for instance.

**Why?**

Ok, the real reason I'm even mentioning this is that I don't want to pollute my index.html with +15 favicons references. If the favicons are fingerprinted browsers can't autodiscover them.

**Fingerprinting, what?**

One way of making sites faster is to use allow browsers to cache the assets on your site for a long, long time. The downside of this is that user's might not get the newest version of your assets. Enter fingerprinting. Using [broccoli-asset-rev](https://github.com/rickharrison/broccoli-asset-rev) Ember CLI automatically fingerprints all your assets. In human, it appends a randomly generated string to all your assets and updates any references to them in your templates and styles to match. The next time a user visits your page the browser will detect the filename changes and replace the cached asset. Good.

* * *

By the way, [Real Favicon Generator](http://realfavicongenerator.net) is great for generating all those annoying images.
