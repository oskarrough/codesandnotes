---
title: "Backup"
---

You don't want to loose your work (not to mention your photos and music) so you need to have secure backups of your data. There are several ways to achieve this. This is my way.

---
title: "Manifest"
---

1. I have a pretty funky music collection, photos of naked girls, documents and work related data and code. All things I do not want to loose.
2. I have several computers that I regularly use so data can not be tied to a single computer.
3. Loss of a computer does not mean data loss.
4. When something is changed in either one location, it should automatically sync to all other locations as they become available.
5. Data should always be accessible.

## Software

Now that I'm writing this I realize I'm using quite a bit of different providers.

- [Arq](http://www.haystacksoftware.com/arq) —
- [Git](http://git-scm.com) — also see [Github](https://github.com) and [Bitbucket](https://bitbucket.org)
- [Dotfiles](http://github.com/oskarrough/dotfiles)
- [Dropbox](http://dropbox.com)
- [SugarSync](http://sugarsync.com)
- [Synk](http://decimus.net/synk)
- [Copy.com](http://copy.com)

## Locations

- Computer 1
- Computer 2
- External harddrive 1
- External harddrive 2
- Local NAS server 1
- Amazon Glacier or Amazon S3

## How to

I have several scripts in Synk.app that sync selected folders between all locations except online. This means every time I plug in an external harddrive it watches for changes in those locations and makes sure that both the computer and external harddrive is in sync. It also syncs directly between externals.

My data is spread across the default OSX folders: Documents, Music and Photos. Only using these folders forces me to focus on where I put my data.

E-mail is in the cloud, contacts and calendar as well. Settings and preferences for my applications etc. are all in my dropbox/private folder.

#### References
