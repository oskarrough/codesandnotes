---
title: 3. Syncing the tagwall
tags: ['ember-js']
weight: 3
---

To persist our messages we need to save them somewhere. One option would be localstorage and using an ember-addon like [ember-localforage-adapter](https://github.com/genkgo/ember-localforage-adapter) which works great. If you did this, you'd have the first steps laid out for an offline-first application. But it's still offline and we're lonely, we want to talk to other humans. We need to synchronize our data online and we'll be using Firebase to do it.

We will:

- Create a `message` model using Ember Data
- Use actions up, data down
- Use Emberfire to bridge Ember and Firebase

## The message model

Models are the objects that represent your data. You define what kind of data you would like to store. For our `message` model we'll define two properties: `text`, and `created`:

```
ember g model message text:string created:date
```

For the `created` we can set a default value so we don't have to save a date every time. Edit `app/message/model.js`

```javascript
import DS from 'ember-data';

export default DS.Model.extend({
  text: DS.attr('string'),
  created: DS.attr('date', {
    defaultValue() { return new Date().getTime(); }
  })
});
```

As Emberfire automatically adds IDs to models, we shouldn't define any ourselves. Now you can do `this.store.createRecord('message', { text: 'Funky emotions' })` to create a new message using Ember Data. But components should not be used to create new records. That's what routes are for.

## Data down!

Right now, when a message is sent, we push a small object (not a *real* model) into our messages array in the component. This is the lo-fi version. What we should do instead is data down. The route is responsible for fetching data and pass it to our component. Since our component is currently in the `index` template, we'll request our model in the `index` route:

```javascript
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('message');
  }
});
```

This is Ember Data's way of sending an ajax request to the server to fetch all message. The route's model hook returns a model which is automatically set on the controller, which in turn makes it available in our templates. This works even if you don't define a controller, because Ember autogenerates it for you.

We also need to pass the model to our component:

```handlebars
{{tag-wall messages=model}}
```

If you refresh the browser now, you'll see an error in the console as it tries to fetch the messages `GET http://localhost:4200/messages 404 (Not Found)`. Right, because we don't have a backend connected yet. This is where Firebase comes into play but let's complement the data down with actions up first.

## Actions up!

Components are supposed to be dumb. The tagwall isn't supposed to know anything about our models, how we store, create or save our data. See more about [sending actions from components to your application](http://guides.emberjs.com/v1.13.0/components/sending-actions-from-components-to-your-application/). Now our tagwall is it's messages from the route's model, good! But it's still changing the data by creating new messages directly in the component, bad!

Instead the component should notify the application through an action to create a new message. This is data down, actions up. I know it took me some time to understand so allow me to repeat: Currently our component has a single action called `submit` which saves a new message. Components shouldn't change data. Instead we are going to change the `submit` action on the component to check that we never save an empty message and afterwards sending the actions up. This allows us to catch the action on the route. called `saveMessage`.

`submit` does a little check to make sure we never save an empty message. If there is a message, we send the action upwards for the route to catch. Note how no data is changed at component level. `saveMessage` on the route is in charge of creating and saving the message.

Add the `sendAction` at the end of the `submit` action in the component:

```javascript
actions: {
  submit(text) {
    if (text.length < 1) {
      return false;
    }
    this.set('newMessage', '');
    this.sendAction('onSubmit', text);
  }
}
```

So when `sendMessage` is called in our component, it checks whether there is a text to send, and if so, it'll send the action up using the name `onSubmit`. Note how we pass `text` as argument. On the component itself you tell it which parent actions should handle the it. Here we define `saveMessage`.

Index template:

```handlebars
{{tag-wall messages=model onSubmit="saveMessage"}}
```

Index route:

```javascript
import Ember from 'ember';

export default Ember.Route.extend({
  …snip…
  actions: {
    saveMessage(text) {
      const message = this.store.createRecord('message', {
        text: text
      });
      message.save();
    }
  }
});
```

Great! We've now completely seperated our concerns. The tagwall component can send a message but it's up to the application itself what it wants to do with it.

But there's still an error because we're trying to save a model without having a backend to save it to.

## Emberfire

Let's sync our site with a Firebase database. We need to create a Firebase database and configure the Emberfire adapter, which bridges ember-data and Firebase almost seamlessly. That's the beauty of this combo, we almost don't need to change *any* code to change the backend.

Head to [firebase.com](https://www.firebase.com), sign up and create a new 'app' as they call it. You'll get a url like `my-name.firebase.io`. Remember it.

Now install the emberfire addon. Press `ctrl+c` in Terminal to stop the server and run:

```bash
ember install emberfire
```

This will install the Emberfire module from NPM and add Firebase to our `bower.json` as well. As it will tell you, you need to configure your Firebase URL in `config/environment.js` as well as the [content security policy](http://www.ember-cli.com/user-guide/#content-security-policy) (CSP):

```javascript
…snip…
contentSecurityPolicy: {
  'connect-src': "'self' https://auth.firebase.com wss://*.firebaseio.com",
  'script-src': "'self' 'unsafe-eval' https://*.firebaseio.com"
},
firebase: 'https://your-firebase.firebaseio.com/',
…snip…
```

Alright, notice how a `app/application/adapter.js` was created for us by Emberfire? With Ember Data the adapter tell how to communicate with the backend and it'll hopefully *just work*.

Open the server again using `ember serve` and try to send a message. 'saveMessage' will call `.save()` on the model, which will tell ember-data to sends a request to the server through emberfire and finally landing in Firebase.

So, there we have it! If you create some messages and refresh, the messages will now properly save and sync to our new remote database. Better believe it! If you open Firebase it'll look something like this:

{{< figure src="/images/tagwall/tagwall4.png" >}}

## Next steps

OK, that's it. The tagwall is working, you can send messages and they are stored in Firebase. If you deploy it (see chapter 1 again) or go to my example at <a href="http://tagwall.surge.sh">tagwall.surge.sh</a> we can have a chat!

Here are some improvements we could do:

- Add styling in `app/styles/app.css` (or if you're sassy, you can install [ember-cli-sass](https://github.com/aexmachina/ember-cli-sass)) — it would make sense to make the input fixed at the bottom and limit the height of our messages with `overflow-y: scroll;`
- Make it possible to edit/delete messages
- Introduce a `user` model so people can identify themselves

And what if visitors could create new tagwalls themselves and decide the URL? This way people could create their own (secret) tagwalls to share. This is what we'll do in the upcoming chapter four.
