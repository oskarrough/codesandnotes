# Codes & Notes

This is the repository of the book on web development I’m writing. It contains my drafts as well as finished articles, design ideas, personal notes and a backup of my Wordpress setup.

Please read the [Introduction to Codes & Notes](http://codesandnotes.com/introduction).

## Setup

Having used Jekyll, Wordpress, Middleman, my own Gulp generator I've finally settled on [Hugo](http://gohugo.io/) to build the book. It's a static site generator written in Go. Super fast (really) and very flexible.

All articles are in `app/content/`. They are written in Markdown with YAML front-matter for Hugo to build the project. Hugo resides in `app/`.

## Development

First you need git, node and hugo installed. If you have homebrew as well, hugo is installed like this:

- `brew install hugo`

Then go:

1. `git clone git@github.com:oskarrough/codesandnotes.git`
2. `cd codesandnotes/app`
3. `hugo server --watch`

gsed -i.backup -e 's/^# \(.*\)$/---\ntitle: \"\1\"\n---/g' *.md

# License

Licensed [BY-NC-SA Creative Commons](http://creativecommons.org/licenses/by-nc-sa/3.0/).
