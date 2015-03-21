# Creating a desktop app from your website

In this article I'll explain how you can wrap your existing website into a desktop application for OSX, Windows and Linux using [NW.js](http://nwjs.io/).

Your first question should be why would I do this? My app already works in the browser. That's cool but having a desktop app has a few advantages:

- access to native platform APIs
- convenience
- can work offline

https://github.com/nwjs/nw.js

1. Download and move nwjs.app to your applications folder.

http://nwjs.io/

2.

https://github.com/nwjs/nw.js/wiki/Debugging-with-Sublime-Text-2-and-3


/Users/oskar/Downloads/nwjs-v0.12.0-osx-x64/nwjs.app/Contents/MacOS/nwjs .


{
  "name": "radio4000",
  "main": "index.html",
  "version": "0.0.3",
  "chromium-args": "--enable-experimental-web-platform-features",
  "main": "index.html",
  "window": {
    "width": 960,
    "height": 600,
    "toolbar": false,
    "frame": false,
    "transparent": true
  }
}

https://github.com/mllrsohn/node-webkit-builder
https://github.com/Emerson/Ember-Node-Webkit-Example

credits.html
options.macIcns > icns file


nwbuild dist -p osx64
