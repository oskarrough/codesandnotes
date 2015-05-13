---
title: Handling keyboard shortcuts with Ember.js
date: 2014-11-16
tags: ['ember-js']
---

Here's how you do something when the user presses a key. For instance, this example transtions out of my edit route when you press 'escape'.

The view handles the interaction, the controller does the rest.

```JavaScript
// controllers/edit.js
export default Ember.ObjectController.extend({
    actions: {
        // this get called from the view
        cancelEdit: function() {
            // leaving the route also sets isexpanded to false
            this.transitionToRoute('channel', this.get('model'));
        }
    }
});

// views/edit.js
export default Ember.View.extend({
    keyDown: function(event) {

        // 'ESC' key
        if (event.keyCode === 27) {
            this.get('controller').send('cancelEdit');
        }
    }
});
```
