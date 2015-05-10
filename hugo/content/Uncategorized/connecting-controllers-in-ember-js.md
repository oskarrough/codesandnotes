---
title: Connecting controllers in Ember.js
date: 2014-11-16
tags: ['ember-js']
---

To enable communication between controllers you have to use the `needs` property on your controller. Here's how to do it:

    // controllers/playlist.js
    import Ember from 'ember';

    export default Ember.ObjectController.extend({
        needs: ['tracks', 'anotherOne'],

        // now you can access it with
        // this.get('controllers.tracks')

        // or in your template:
        // {{controllers.tracks}}
        // {{controllers.tracks.someProperty}}

        // if you want, you can make a shortcut/alias:
        tracks: Ember.computed.alias('controllers.tracks'),
    });

Also see the official guide on [http://emberjs.com/guides/controllers/dependencies-between-controllers/](http://emberjs.com/guides/controllers/dependencies-between-controllers/)
