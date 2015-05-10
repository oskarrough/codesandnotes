---
layout: post
title: Changing the default active class in Ember.js
date: 2014-11-16
tags: ["Articles","Ember.js"]
---

Ember's `{{link-to}}` helper automatically adds a `class="active"` on active routes.

To change it, your `app.js` could look like this:

    import Ember from 'ember';

    var App = Ember.Application.extend({});

    // Change the class Ember adds to active elements
    Ember.LinkView.reopen({
      activeClass: 'is-active'
    });

    export default App;
    