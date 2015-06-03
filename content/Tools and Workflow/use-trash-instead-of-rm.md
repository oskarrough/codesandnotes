---
title: Use trash instead of rm
date: 2013-10-21
tags: [Command line","OS X"]
---

When you delete stuff in the command line using `rm` you have no way of undoing it. A friend of mine once accidently wrote `rm -rf *` and it's not super fun. Instead, by installing [trash-cli](https://github.com/andreafrancia/trash-cli) you will have a new `trash` command that moves your files to the trash instead of deleting them straight out.

Install it with [homebrew](http://brew.sh/): `$ brew install trash`

#### References

- [How not to rm yourself](https://plus.google.com/114738313102270607087/posts/Quxra6ARTRs)
