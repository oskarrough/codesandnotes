---
title: Adding Google Analytics to Ember.js
date: 2014-11-16
tags: [Ember.js"]
---

Since we're developing a JavaScript app, Google Analytics doesn't know what is a "page". So you have to notify it!

Add your normal Google Analytics script to index.html and add this to your `app.js`:

    Ember.Router.reopen({
      notifyGoogleAnalytics: function() {
        if (!ga) { return; }
        return ga('send', 'pageview', {
            'page': this.get('url'),
            'title': this.get('url')
          });
      }.on('didTransition')
    });

