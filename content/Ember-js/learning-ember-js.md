---
title: Learning Ember.js
---

## ES6 destructuring

const { computed, debug } = Ember;

https://github.com/dockyard/styleguides/blob/master/ember.md#create-local-version-of-ember-and-ds

## Communicating between things

1. Needs

needs: ['post/comments'],
postComments: Ember.computed.alias('controllers.post/comments')

2. Services

todo

3. routeFor/controllerFor/modelFor

## Ember-CLI

An essential part of what makes Ember more productive.

## Addons

One of the great things about Ember is its addon ecosystem through ember-cli. Without it, when you want to add some third-party functionality to your project, you'd need to find, donwload, place, import, reference and activate it first. It's a mess.

If a third-project is written as an ember-addon (basically an ember-cli wrapper around the project), you can do

`$ ember install cool-ember-addon`

… and you'll have everything ready to go.

**Useful Ember addons**

https://github.com/yapplabs/ember-key-responder
https://github.com/paddle8/ember-document-title
https://github.com/dockyard/ember-cli-async-button
https://github.com/vestorly/torii
http://ef4.github.io/liquid-fire/

## Ember tools

https://github.com/emberjs/ember-inspector
http://andycrum.github.io/ember-data-model-maker/
https://alexspeller.com/ember-diagonal/
https://github.com/yapplabs/ember-radio-button

## Learning

- https://embergrep.com
- https://github.com/realityendshere/emberella
- http://www.programwitherik.com/
- https://github.com/emberjs/website/blob/master/source/guides/cookbook/ember_data/linking_to_slugs.md
- [emberweekend.com/episodes](https://emberweekend.com/episodes)
- [ember.zone/](http://ember.zone/)
- [ember.vicramon.com/](http://ember.vicramon.com/)
- [toptal.com/emberjs/a-thorough-guide-to-ember-data](http://www.toptal.com/emberjs/a-thorough-guide-to-ember-data)
- [tilde.io/events/introduction-to-ember-online/](http://www.tilde.io/events/introduction-to-ember-online/)
- [codeschool.com/courses/warming-up-with-emberjs](https://www.codeschool.com/courses/warming-up-with-emberjs)
- [madhatted.com/2013/6/8/lifecycle-hooks-in-ember-js-views](http://madhatted.com/2013/6/8/lifecycle-hooks-in-ember-js-views)
- [emberflare.com/entries](https://emberflare.com/entries)
- [embercasts.com/episodes/client-side-authentication-part-1](http://www.embercasts.com/episodes/client-side-authentication-part-1)
- [firebase.com/blog/2013-12-16-emberfire-guest-blog.html](https://www.firebase.com/blog/2013-12-16-emberfire-guest-blog.html)
- [github.com/balinterdi/ideavote-emberfire](https://github.com/balinterdi/ideavote-emberfire)
- [github.com/limeapps/ember-share](https://github.com/limeapps/ember-share)
- [youtube.com/watch?v=jbNCXmR6_aA](https://www.youtube.com/watch?v=jbNCXmR6_aA)
- [github.com/GavinJoyce/ember-beats](https://github.com/GavinJoyce/ember-beats)
- [toptal.com/javascript/a-step-by-step-guide-to-building-your-first-ember-js-app](http://www.toptal.com/javascript/a-step-by-step-guide-to-building-your-first-ember-js-app)
- [pivotallabs.com/ember-js-and-soundmanager2/](http://pivotallabs.com/ember-js-and-soundmanager2/)
- [slideshare.net/mixonic/client-side-auth-with-ember](http://www.slideshare.net/mixonic/client-side-auth-with-ember)
- [madhatted.com/2013/6/8/lifecycle-hooks-in-ember-js-views](http://madhatted.com/2013/6/8/lifecycle-hooks-in-ember-js-views)
- [alg.github.io/talks/emberjs/#/title](http://alg.github.io/talks/emberjs/#/title)
- [medium.com/ember-js-framework/450f1ffb1967](https://medium.com/ember-js-framework/450f1ffb1967)
- http://ember.land/
- http://www.emberscreencasts.com/
- https://github.com/artificialio/sane
- http://gofullstack.com/getting-started-with-ember-js/
- http://emberjs.com/guides/getting-started/planning-the-application/
- http://blog.runspired.com/
