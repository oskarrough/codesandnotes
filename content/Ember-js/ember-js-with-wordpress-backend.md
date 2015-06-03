---
title: Combining Wordpress CMS with Ember.js
---

Let me present you a great (and dare I say, fun!) way to build websites with the power of Ember and Wordpress extended with [WP-API](http://wp-api.org/) and [Advanced Custom Fields](http://www.advancedcustomfields.com/) (ACF).

We've tried it all: Typo3, Drupal, Wordpress with Timber, Perch, Statamic, Jekyll, Middleman, Google Drive, Dropbox, anybox, anything to make it easy for clients to edit their website while spending a minimum amount of time on that part to allow us to focus on creating a good website. Normally we'd even finish a static website, convert it to a Wordpress theme and first then integrate it. Not effective, it's hard to reuse code across projects and it's not fun.

Ember is fun but for the most of us it's hard to whip up a REST API. And how do you make it easy for your client (or worse, yourself!) to manage all that? What about multilanguage? Now a day, Wordpress does all that and WP-API exposes it with a REST API that we can use with Ember.

Even if your project isn't limited to title-and-body kind of articles, Advanced Custom Fields gives you all the flexibility you can think of AND its data is _also_ available through WP-API.

## Everything is a post

Custom post types, how to query and filter.

### Custom Fields

How to configure Advanced Custom Fields.

### Related projects

- Kunstjagd, Yasemin, BarGuide projects for inspiration.
- https://github.com/kush-team/ember-cli-to-wp-theme (the most interesting one)
- https://github.com/calouette/ember-wp-api
- https://github.com/Dhaulagiri/ember-cli-wordpress

### Useful ember addons

- ember-cli-sass
- ember-cli-autoprefixer
- ember-cli-document-title

## Supporting IE9

Be careful of www and no www in your adapter host property.
