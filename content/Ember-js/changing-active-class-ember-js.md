---
title: Changing the default active class in Ember.js
tags: ['ember-js']
---

Ember's `{{link-to}}` helper automatically adds a `class="active"` when the route is considered active. To change that class, add this to your ember-cli's `app/app.js`:

```javascript
// Change the default 'active' class
Ember.LinkComponent.reopen({
	activeClass: 'is-active'
});
```
