# Codes & Notes

This is the repository of the book on web development I’m writing. It contains my drafts as well as finished articles, design ideas, personal notes.

☞ Please read the [Introduction to Codes & Notes](https://www.codesandnotes.com/preface/introduction/)

## Development setup

Having used Jekyll, Wordpress, Middleman, my own Gulp generator I've finally settled on [Hugo](http://gohugo.io/) + Gulp to build the book. It's a static site generator written in Go. Super fast (really) and very flexible.

All articles are in the `content` folder. They are written in Markdown format with YAML front-matter. Templates, styles and scripts are in the `app` folder.

### Installing dependencies

You will need Git, Node and Hugo installed on your system. Then go:

1. `git clone git@github.com:oskarrough/codesandnotes.git`
2. `cd codesandnotes`
3. `yarn`

To start a local development server: `yarn start`

### Deployment

To deploy the project, push to the `production` branch. This will trigger Netlify to build and publish to https://www.codesandnotes.com.

## Writing style

Both [Alex](https://github.com/wooorm/alex) and [retext-mapbox-standard](https://github.com/mapbox/retext-mapbox-standard) can be used to check the writing. Take these suggestions with a grain of salt.

`yarn test`
