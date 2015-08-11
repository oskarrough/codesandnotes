---
title: 1. Setting up
tags: ['ember-js']
weight: 1
---

We'll be using a bunch of tools namely: [Ember.js](http://emberjs.com/), [Ember-CLI](http://www.Ember-CLI.com/), [Firebase](https://www.firebase.com/) and [Emberfire](https://github.com/firebase/emberfire). To put the project online later we'll use [Surge](http://surge.sh/). All are free tools and Firebase has premium features if you want to go pro. For hobby projects, they have a very generous plan which we'll accept.

To install all of these, you need to have node.js and git running on your system. When it works, you can open Terminal.app and do `node --version` or `git --version` to make sure it works.

> I've only been able to test on OS X but the ideas of the guide should hopefully pierce through platforms

Now we'll create a new Ember project using Ember-CLI and see it working.

## Creating a new project with Ember-CLI

Ember-CLI is the official build system and command-line interface for Ember.js projects. It makes developing Ember.js applications a lot easier. To install it globally on your system, open the command line:

```bash
npm install --global ember-cli
```

Then create a new project named 'tagwall':

```bash
ember new tagwall
```

Depending on your internet speed it might take ~1-10mins to download and install everything. With my connection it even fails sometimes but a second `npm install` usually does the trick. With everything done it should look like this:

{{<figure src="/images/tagwall/tagwall1.png">}}

> Note: As of this writing, Ember-CLI was on version 1.13.7

The CLI has now bootstrapped everything and we can open the folder to check it out:

```bash
cd tagwall
open .
```

You'll see tons of files and folders but we'll mostly be concerned with the `app` folder. Let's tell Ember-CLI that we want to use a pod structure. Pods allows us to group files by structure rather than type. For instance, instead of templates clamped together in `app/templates/`, they'll be split out under their route such as `app/posts/template.hbs`. Don't worry about it too much, it'll make sense soon. If you want, see more on the [pod structure](http://www.Ember-CLI.com/user-guide/#using-pods).

To use pods, edit the hidden `.Ember-CLI` file to:

```
{
  "disableAnalytics": false,
  "usePods": true
}
```

## Making sure it runs

Because our app was generated without pods, we'll delete `app/templates/application.hbs` and the `app/controllers` folder. While it's easy enough to delete files using the Finder in OS X, we'll now do it using [trash](https://github.com/sindresorhus/trash), which is a lot safer than using `rm`.

```bash
npm install --global trash
trash app/templates/application.hbs app/templates/components app/controllers
```

Now it's time to create a new application route (which also generates a new application template for us). Make sure you in the `tagwall` folder that was just created and run:

```bash
ember g route application
```

Ember-CLI is now helping us create `app/application/route.js` and `app/application/template.hbs`. Change some text in `app/application/template.hbs` to test:

```handlebars
<h1>Rough Tagwall</h1>
{{outlet}}
```

The `{{outlet}}` in the [application template](http://guides.emberjs.com/v1.13.0/templates/the-application-template/) is where Ember will render our templates. To see your site, Ember-CLI can start a server which will automatically build and refresh the browser every time you change a file. Very practical, try it out:

```bash
ember serve
```

Open up your browser on [http://localhost:4200](http://localhost:4200) and rejoice! It'll look something like this:

{{<figure src="/images/tagwall/tagwall2.png">}}

## Building and deploying

To publish our project online we can deploy it using [Surge.sh](http://surge.sh/). A brilliant (free!) service for deploying static sites, exactly like ours. Stop the Ember-CLI server using `ctrl+c` in the Terminal, then build the project:

```bash
ember build --environment=production
```

We specify a *production* [environment](http://www.Ember-CLI.com/user-guide/#Environments) which will make sure everything is minified. When it's done your project will be available in the `dist` folder. Check it out, this is what you should put online. You should avoid changing anything in the `dist` folder yourself. Now install and deploy using surge:

```bash
npm install --global surge
mv dist/index.html dist/200.html
surge dist
```

Note that we rename `index.html` to `200.html` for [client-side routing](http://surge.sh/help/adding-a-200-page-for-client-side-routing). Without it, the server wouldn't know that we want a URL as `example.com/some/ember/route` to be handled by `example.com/index.html` — and not the `some/ember/route` folder.

<!-- [2]({{< relref "2-building-the-tagwall.md" >}}) -->
