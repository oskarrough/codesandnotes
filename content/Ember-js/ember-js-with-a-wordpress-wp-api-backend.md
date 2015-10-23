---
title: Ember.js with a Wordpress WP-API backend
draft: true
---

We've tried it all: Typo3, Drupal, CMS Made Simple, Hugo, Kirby, Wordpress with Timber, Perch, Statamic, Jekyll, Middleman, Google Drive, Dropbox, anybox, no box… anything to make it easier for clients to edit their website while minimizing development time, allowing us to focus on the unique, features of the individual projects, making them great. Normally we'd even finish a static, prototype website first, and first then then convert it to a Wordpress theme and make it dynamic. Not effective, it's hard to reuse code across projects and it's not fun.

Let me present you a great (and dare I say, fun!) way to build websites with the power of Ember and Wordpress extended with [WP-API](http://wp-api.org/) and [Advanced Custom Fields](http://www.advancedcustomfields.com/) (ACF). We'll write a simple adapter and serializer for Ember Data to make it fit together and you'll be up and running in no time.

Ember is fun but for the most of us it's difficult to whip up a REST API. And how do you make it easy for your client (or even worse, yourself!) to manage all that? What about multilanguage? What about security? That's where a content management system comes in. Wordpress combined with a few free plugins does all that and the Wordpress API (WP-API) exposes it almost automagically with a REST API that we can use with Ember Data.

Of course, skipping the theme layer of Wordpress has its disadvantages. Unless the plugin is exposed through the WP-API, you probably won't be able to use it. You can't use custom shortcodes, you'll have to build menus yourself etc. On the other hand we'll have the JavaScript and Ember communities behind us.

As most things in life, as soon as you know how to it's actually pretty easy. That being said this setup does require some setup. To keep this article short(er) I don't have the opportunity to explain everything and it assumes you are familiar with Wordpress and Ember.js.

## Our goal

We will create a portfolio website using Ember.js and Wordpress as our backend. We will extend WP with a custom ‘project’ post type with optional fields to choose a background and text color per project.

Using Ember Data and a custom adapter and serializer we can build the front-end with Ember.

## Setting up Wordpress

Install Wordpress. I can recommend [Webfaction](https://webfaction.com) as a host but anything will do. [Pantheon](https://pantheon.io) also offers (two) free hosted installs if you prefer.

Once installed, we need a few plugins as well: [WP-API 2](http://v2.wp-api.org/), [WP-CORS](https://wordpress.org/plugins/wp-cors/), [ACF](http://www.advancedcustomfields.com/) and finally [ACF to WP API](https://wordpress.org/plugins/acf-to-wp-api/).

Enable all of them now, please.

My Wordpress installation is here: http://dev-ember-wp.pantheon.io/wp-json/wp/v2/posts. If you go there you’ll see the JSON we get. If you use Chrome, the [json-formatter]](https://chrome.google.com/webstore/detail/json-formatter/bcjindcccaagfpapjjmafapmmgkkhgoa?hl=en-US) extension is handy.

To get all posts the endpoint is:

http://dev-ember-wp.pantheon.io/wp-json/wp/v2/posts

To get a single post the endpoint is:

http://dev-ember-wp.pantheon.io/wp-json/wp/v2/posts/1

Good, that works. You can replace ‘posts’ with your other types as well. Now we’ll create the custom project post type, add the color fields with ACF and make sure we can access it through the API. I won’t go in to detail about creating custom post types in Wordpress but there a few things you need to know.

First upload this project-post-type.js to `/wp-content/plugins/` and enable it in Wordpress.

Because the endpoint derives from the post type name, the name is registered in plural form e.g. ‘projects’. This is what all the Ember adapters normally expect. Also `show_in_rest` is set to true, otherwise it won’t show up. If you wanted to have another endpoint than the post type name `projects` you can change it with the `rest_base` parameter.

Now go to ‘Custom Fields’ and create a new field group. Assign it to our ‘projects’ post type in the location box and create to color picker fields: ‘background color’ and ‘text color’.

Let’s create a project with some random text and colors to test. If everything worked you’ll be able to find it at

http://dev-ember-wp.pantheon.io/wp-json/wp/v2/projects


## Setting up Ember CLI

@todo: Custom post types, how to query and filter.

- https://github.com/WP-API/WP-API/issues/1352#issuecomment-112975732
- https://github.com/WP-API/WP-API/pull/1302

### Custom Fields

@todo: How to configure Advanced Custom Fields.

### Related projects

- Pfadfinderei, Kölnercocktailtage, Magnus Winter, Kunstjagd, Yasemin, BarGuide projects for inspiration.
- https://github.com/kush-team/ember-cli-to-wp-theme (the most interesting one)
- https://github.com/calouette/ember-wp-api
- https://github.com/dhaulagiri/ember-cli-wordpress

### Useful ember addons

- ember-cli-sass
- ember-cli-autoprefixer
- ember-cli-document-title

### Taxonomies

The endpoint for tags is here: http://pfadfinderei.com/wp-json/taxonomies/post_tag/terms

## Supporting IE9

Be careful that your adapter's host property matches the full URL of your API. So if your API doesn't have www, don't include it. This tricked me up for some hours.

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

## WPML support

https://wordpress.org/support/topic/wpml-support-20
