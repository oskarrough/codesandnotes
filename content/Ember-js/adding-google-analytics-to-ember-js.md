---
title: Adding Google Analytics to Ember.js
tags: ['ember-js']
---

Since we're developing a JavaScript app, Google Analytics doesn't know what you consider a "page". So you have to notify it!

Add your normal Google Analytics script to index.html and this to your `app.js`:

```javascript
/* global window */
Ember.Router.reopen({
	notifyGoogleAnalytics: Ember.on('didTransition', function() {
		if (!ga) { return; }
		return ga('send', 'pageview', {
			'page': this.get('url'),
			'title': this.get('url')
		});
	})
});
```

You can also check out [ember-cli-google-analytics](https://github.com/pgrippi/ember-cli-google-analytics), it's likely to be more up to date than this article.
