---
title: Use trash instead of rm
---

When you delete files and folders from the command line with the `rm` command, you have no way of undoing it. Whatever you delete is gone.

A friend of mine once, and I'm sure you have one too, accidently wrote `rm -rf *` once and it's not super fun. Don't. Instead, use [trash-cli](https://github.com/sindresorhus/trash-cli) on OS X and you will have a new `trash` command that moves your files to the trash instead of deleting them straight out.

There's also a package for emptiying the trash.

```shell
npm install --global trash-cli empty-trash
```

### Resources

- [How not to rm yourself](https://plus.google.com/114738313102270607087/posts/Quxra6ARTRs)
