---
title: Connecting controllers in Ember.js
published: true
---


To enable communication between controllers you can inject a controller using `Ember.inject.controller`. Here's how to do it:

```javascript
// controllers/playlist.js
import Ember from 'ember';

export default Ember.Controller.extend({
    anotherController: Ember.inject.controller(),

    // now you can access it with
    // this.get('anotherController')

    // or in your template:
    // {{anotherController.someProperty}}
});
```

Also see the official guide on [dependencies between controllers](http://guides.emberjs.com/v1.13.0/controllers/dependencies-between-controllers/).
