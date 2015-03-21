# Codes & Notes

This is the repository of the book on web development I’m writing. It contains my drafts, design ideas and a backup of my Wordpress setup.

All finished articles are only on the website.

Please read the [Introduction to Codes & Notes](http://codesandnotes.com/introduction).

## Setup

Trying out a Middleman setup.

- All chapters are in /content.
- Middleman will convert all .md files to .html and run all pages through /design/layouts/layout.erb, building them to the /dist folder.
- Everything from /content will be copied over.
- Styles should be in /design/styles/ but they are in /content currently because Middleman would otherwise fail.

To develop:

`middleman`

To build

`middleman build`
`divshot push [development/production]`

# Lcn

Licensed [BY-NC-SA Creative Commons](http://creativecommons.org/licenses/by-nc-sa/3.0/).
