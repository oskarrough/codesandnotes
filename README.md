# Codes & Notes

This is the repository of the book on web development I’m writing. It contains my drafts as well as finished articles, design ideas, personal notes and a backup of my Wordpress setup.

☞ Please read the [Introduction to Codes & Notes](http://codesandnotes.com/introduction)

## Setup

Having used Jekyll, Wordpress, Middleman, my own Gulp generator I've finally settled on [Hugo](http://gohugo.io/) + Gulp to build the book. It's a static site generator written in Go. Super fast (really) and very flexible.

All articles are in `content/`. They are written in Markdown with YAML front-matter for Hugo to build the project. Templates, styles and scripts are in `app/`.

## Installing dependecies

First you need git, node, go and hugo installed. If you have homebrew as well, hugo is installed like this:

- `brew install hugo`

### How to install and use Hugo from master with Fish Shell

If you want to compile with the latest greatest from GitHub, do this:

```bash
brew install mercurial (needed for some dependencies)
set -x GOPATH $HOME/go (where go should install stuff, you can change this)
go env (check that the gopath is really set)
go get -v github.com/spf13/hugo (installs hugo into ~/go/src/……… )
mv ~/go/bin/hugo /usr/local/bin/ (now the hugo command should be available in your fish shell)
```

## Installing Codes & Notes

Then go:

1. `git clone git@github.com:oskarrough/codesandnotes.git`
2. `cd codesandnotes`
3. `npm install; bower install; gulp clean`

gsed -i.backup -e 's/^# \(.*\)$/---\ntitle: \"\1\"\n---/g' *.md

## Running the server

1. `gulp serve`

## Building the project

1. `gulp`
2. `gulp deploy`

# License

Licensed [BY-NC-SA Creative Commons](http://creativecommons.org/licenses/by-nc-sa/3.0/).
