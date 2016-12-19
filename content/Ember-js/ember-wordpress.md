---
title: Ember.js with a Wordpress WP-API backend
tags: ['ember-js']
---

**This article is a work in progress but I decided to publish it anyway. Since publishing I've started https://github.com/oskarrough/ember-wordpress/, check it out.**

## Background

We've tried it all: Typo3, Drupal, CMS Made Simple, Hugo, Kirby, Wordpress with Timber, Perch, Statamic, Jekyll, Middleman, Google Drive, Dropbox, anybox, no box… anything to make it easier for clients to edit their website while minimizing development time. Allowing us to focus on the unique, features of each individual project. Normally we'd even finish a static, prototype website first, and first then then convert it to a Wordpress theme and make it dynamic. Not effective, it's hard to reuse code across projects and it's not fun.

As you're starting with Ember, someone might say "Hey, just install Cent OS, set up a PostgreSQL database on this cloud host and configure a node REST API on top and you'll be ready to go". Now, you might answer "Why thank you, I have no idea what you are talking about." And how do you make it easy for yourself (or even worse, the client!) to edit the content? What about multilanguage? What about security? Well, this is where a content management system comes in. Wordpress, combined with a few plugins, does all that and the Wordpress API (WP-API) exposes it almost automagically with a REST API that we can use with Ember Data.

Let me present you a great (and dare I say, fun!) way to build websites with the power of Ember and Wordpress extended with [WP-API](http://wp-api.org/) and [Advanced Custom Fields](http://www.advancedcustomfields.com/) (ACF). We'll learn how to connect and use Wordpress as the backend for an Ember.js front-end.

## Disclaimer and Wordpress plugins

By choosing to build front-end with a JavaScript framework we will skip the Wordpress theme layer. Let me give an example. If you were using a "related posts" plugin which automatically renders related posts below each post in your theme, it will not work out of the box. This might seem obvious but is important to note. By decoupling the backend and front-end we need to rely on the data the WP-API supplies and build what we need ourselves.

The way we should approach it is to configure Wordpress to give us all the data we need through the WP-API. Now, the WP-API does a pretty good job at giving us almost everything we need out of the box. You can't use custom shortcodes, since we're skipping Wordpress template engine. You'll have to build the navigation yourself, as well. Luckily, one plugin that *does* work out of the box, is ACF.

## Our goal

We will create a portfolio website using Ember.js and Wordpress as our backend. It will feature a blog section (posts) and projects.

We will extend Wordpress with a custom "project" post type and it'll be possible to define custom background and text colors per project. Before Wordpress version 4.7 you would have to install the WP-API plugin but now it is included.

We will create an Ember.js front-end that speaks to Wordpress using ember-data and the ember-wordpress addon for ember-cli. Phew, that was a lot of names.

Wordpress API <--> Ember Data --> Ember

## Setting up Wordpress

Install Wordpress.

### Hosting

I can recommend [Webfaction](https://www.webfaction.com/?aid=67837) for hosting but antyhing will do. [Pantheon](https://pantheon.io) offers some free one-click installs, which is an easy way to get started.

### WP API plugin

If you are using a version of Wordpress before 4.7, you will need to install as well: [WP-API 2](http://v2.wp-api.org/).

### Endpoints

Make sure you have created at least one post and go to example.com/wp-json/wp/v2/posts. You will see the JSON we get. Here is what it looks like on my site: https://dev-ember-wordpress.pantheon.io/wp-json/wp/v2/posts.

Tip: install a browser extension to format the JSON for you so it is easier to debug. For Chrome, the [json-formatter]](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa) extension is handy.

WP-API gives us many endpoints that we can use to get the data we want. Many can be filtered as well. See the [WP API reference](http://v2.wp-api.org/reference/). Here are some examples:

- Get all posts: `/wp-json/wp/v2/posts`
- Get a single post by id: `/wp-json/wp/v2/posts/1`

Good, that works. Try replacing `posts` with `pages` in the endpoint and guess what happens.

We now have Wordpress running and we can access data through the API.

### Creating a custom "project" post type

Now we’ll create custom post type called "project". I won’t go into much detail about creating custom post types in Wordpress but there a few things you need to know in relation to the API.

You might expect all projects to be available under `/wp-json/wp/v2/projects`, but alas, they are not. Yet. We need to set `show_in_rest` to true for the custom post type, then it will show up.

The endpoint derives from the post type name in plural form. Our post type is called `project` so the endpoint is automatically `projects`. Not coincidentally this is exactly what Ember expects. Good for us.

Tip: to change the endpoint see the `rest_base` parameter for custom post types.

### Adding custom fields with ACF

Let's add our custom color and background color fields using ACF and make sure we can access it through the API.

First install the [ACF](http://www.advancedcustomfields.com/) and [ACF to WP API](https://wordpress.org/plugins/acf-to-wp-api/) wordpress plugins. Activate both.

1. Go to ‘Custom Fields’ and create a new field group.
2. Assign it to our custom post type in the location box
3. Create two color picker fields called `background color` and `text color`.

Let’s create a project with some filler text and colors to test. If everything works, you should be able to see the new fields in the `acf` property. The endpoint will be `/wp-json/wp/v2/projects/PROJECTIDHERE`.

Remember, it will only be included once the ACF to WP API plugin has been activated. And that concludes our basic Wordpress setup. We'll now continue with Ember.

## Setting up Ember.js

If you haven't created a website with Ember.js before I really, really recommend taking time to look through the official (quick start guide)[https://guides.emberjs.com/v2.10.0/getting-started/quick-start/]. You should have `ember-cli` installed globally on your system. If you're not sure what that means, please read the Ember Guides.

To keep this to the point, we will focus on connecting our new Wordpress API. We will create a page that lists all projects and one to show a single project.

---

The below part is not complete. Please see each commit in this repository. It should be all you need. You could also fork the project and change the `wordpressHost` in config/environment.js to match your API.

https://github.com/oskarrough/ember-wordpress-portfolio/commits/master

---

Run `ember new portfolio` to create a new application.

To bridge ember and wordpress we'll use the (ember-wordpress)[https://github.com/oskarrough/ember-wordpress] addon. I recommend you read the readme of it as well. But what it essentially provides are models to support posts, pages, tags, categories and an adapter to shape the JSON from the WP-API into the format Ember expects.

```
ember new portfolio
ember install ember-wordress
```

As per the documentation, let us define our wordpress host. See https://github.com/oskarrough/ember-wordpress#how-to-use.

Now we're ready. Any requests made through ember (because of ember-data + ember-wordpress) will now route to our Wordpress API.

```
ember generate route projects
ember g route project
```

First, let's change the path our the projects route to `/`. This will make it the homepage.

Open `app/router.js` and edit the line like this:

```js
this.route('projects', {path: '/'}, function() {});
```

Next, let's pull in our projects from the Wordpress API and show them.

https://github.com/oskarrough/ember-wordpress-portfolio/commits/master


@todo: Custom post types, how to query and filter.

- https://github.com/WP-API/WP-API/issues/1352#issuecomment-112975732
- https://github.com/WP-API/WP-API/pull/1302

### Useful ember addons

- ember-cli-sass
- ember-cli-autoprefixer
- ember-cli-document-title

### Taxonomies

The endpoint for tags is here: example.com/wp-json/taxonomies/post_tag/terms

https://1fix.io/blog/2015/07/20/query-vars-wp-api/

## To query a category, do this

example.com/wp-json/wp/v2/still?filter[category_name]=some-category

## To exclude a category, do this:

```php
add_filter("query_vars", function($query_vars) {
  $query_vars[] = "category__not_in";
  return $query_vars;
});
```

And then `example.com/wp-json/wp/v2/posts?filter[category__not_in]=4`

## Custom post types

If you add show_in_rest=true as one of your arguments that gets passed to register_post_type() you will be able to retrieve custom post type data.

Example:

```php
add_action( 'init', 'create_post_type' );
function create_post_type() {

    $labels = array(
        'name' => __( 'Data' ),
        'singular_name' => __( 'item' )
    );
    $args = array(
        'labels' => $labels,
        'public' => true,
	'has_archive' => true,
        'show_in_rest' => true
    );
    register_post_type( 'data', $args );
}
```

Then you can use an endpoint like this: http://www.example.com/wp-json/wp/v2/data/

### Related projects

- Pfadfinderei, Kölnercocktailtage, Magnus Winter, Kunstjagd, If everyone else forgets projects for inspiration.
- https://blog.embersherpa.com/ember-js-wordpress-a771242b020b#.uevqjdkvc
- https://isotope11.com/blog/ember-dot-js-wordpress-integration

