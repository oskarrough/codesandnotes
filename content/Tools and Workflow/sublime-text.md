---
title: "Sublime Text"
---

Sublime Text (as of this writing in version 3.0) is my editor of choice. It's insanely fast, extendable through packages, runs on OS X, Windows and Linux and has a huge community. It's pretty perfect for me and many others.

## Shortcuts

There are tons of keyboard shortcuts you would benefit from and I really suggest taking some time to actually learn and use them. It's worth it.

> cmd+shift+p -> 'Command Palette'

The Command Palette gives you access to all exposed actions of Sublime and its plugins.

> cmd+t or cmd+p -> 'GoTo Anything'

GoTo Anything is an instant open/search tool. It has fuzzy search so you could write 'in' to open index.html for example.

## Settings

Upload my settings to a gist.

There are a few settings that I will suggest.

`"auto_complete_commit_on_tab": true`
This is the most important one. It will allow you to autocomplete on 'tab' instead of 'enter' which is generally faster and thereby superior. Can take some getting used to but it really is better.

`"bold_folder_labels": true`
Make folders stand out from files in your sidebar.

`"ensure_newline_at_eof_on_save": true`
Adds an empty space at the end of your file on save. Helps keep your version control commits clean.

`"fade_fold_buttons": false`
Always show buttons for code folding. Makes me use it more often.

```"folder_exclude_patterns": [
	".svn",
	".git",
	".sass-cache"
]```

This option allows you to hide files and folders in your sidebar, which can give some more space in not only the sidebar but also… YOUR MIND


`"trim_trailing_white_space_on_save": true`
Helps trimming away extra, useless spaces automatically as you save.

## Package control

1. Install package control http://wbond.net/sublime_packages/package_control
2. Go fetch some useful packages. What are useful packages?

**Useful packages**

Sublimelinter, Emmet, gitgutter, ternjs

## Sublime and the command line

@todo find new link for 3.0
Install command line for Sublime: http://www.sublimetext.com/docs/2/osx_command_line.html
Subl

Sublime text has nice mate-esque command line launcher called 'subl' hidden in its distribution. To make it available universally:

@todo check my gist

`$ ln -s /Applications/Sublime\ Text\ 2.app/Contents/SharedSupport/bin/subl /usr/local/bin/subl`

Once Installed, you can run it anywhere to open a fresh project/window:

`$ subl .`

## Themes and color schemes

_Color schemes_ will (hopefully) make your code stand our more clearly.

_Themes_ are the styling of the chrome in Sublime Text.

Although there's a huge difference in quality in the available schemes and themes, in the end it's really a user preference.
Some prefer light, some dark, some like rainbows and some like shadows.

That being said, some schemes are better since they clarify the different parts of your code, functions from objects to vars and so on. Others just look pretty.

Choose a good one. My favorite is included by default in Sublime and is called 'Eiffel'. I prefer text black on white and I like my comments to be very visible.

http://kkga.github.io/spacegray/
eiffel
http://tmtheme-editor.herokuapp.com


### Typography

Monospaced fonts, "fixed-width typefaces whose glyphs have the same width", improves the readability of code. Originally created out of the limits of the typewriter and later the lack of advanced graphic engines in the first computers.

Popular ones are Anonymous Pro, Courier, Consolas, Inconsolata, Monaco, Menlo and Source Code Pro the latter being my favorite.

Add this to your Sublime Text settings to change the typeface:

```"font_face": "Source Code Pro"
"font_size": 13```

- http://tmtheme-editor.herokuapp.com/
- https://github.com/chriskempson/base16
- http://buymeasoda.github.com/soda-theme/
- https://news.layervault.com/stories/271-ask-dn-whats-the-best-sublime-text-color-scheme

### References

- http://scotch.io/bar-talk/best-of-sublime-text-3-features-plugins-and-settings
- http://blog.alainmeier.com/post/27255145114/some-things-beginners-might-not-know-about-sublime-text
- http://whiletruecode.com/post/7-handy-text-manipulation-tricks-sublime-text-2

http://wesbos.github.io/Sublime-Text-Power-User-Talk/
https://sublime.wbond.net/packages/JavaScriptNext%20-%20ES6%20Syntax
https://sublime.wbond.net/packages/GitGutter
https://sublime.wbond.net/packages/Package%20Syncing
