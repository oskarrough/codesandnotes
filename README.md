# Codes & Notes

This is the repository of the book on web development I’m writing. It contains my drafts as well as finished articles, design ideas, personal notes and a backup of my Wordpress setup.

☞ Please read the [Introduction to Codes & Notes](http://codesandnotes.com/preface/introduction/)

## Development setup

Having used Jekyll, Wordpress, Middleman, my own Gulp generator I've finally settled on [Hugo](http://gohugo.io/) + Gulp to build the book. It's a static site generator written in Go. Super fast (really) and very flexible.

All articles are in `content/`. They are written in Markdown with YAML front-matter for Hugo to build the project. Templates, styles and scripts are in `app/`.

## Installing dependencies

First you need git, node, go and hugo installed. If you have homebrew as well, hugo is installed like this:

- `brew install hugo`

## Installing Codes & Notes

Then go:

1. `git clone git@github.com:oskarrough/codesandnotes.git`
2. `cd codesandnotes`
3. `yarn`

To start a local development server: `yarn start`
To deploy the project, push to the `production` branch.

## Writing style

Both [Alex](https://github.com/wooorm/alex) and [retext-mapbox-standard](https://github.com/mapbox/retext-mapbox-standard) can be used to check the writing.

`yarn test`

