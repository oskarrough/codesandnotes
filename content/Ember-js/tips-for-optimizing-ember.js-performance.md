---
title: "Tips for optimizing Ember.js performance"
tags: ['ember.js']
---

Ember comes in two variants: development and production, and it's imperative that you use the right one. If you're using ember-cli it already does this for you and you needn't do anything. Otherwise be aware that only the development version contains all the useful debugging tools. This, among other things I'm not aware of but certain of, makes the production variant a lot faster. Use it.

Avoid using observers, triple-check that you're computed properties aren't firing too often, keep your components small and lean.
