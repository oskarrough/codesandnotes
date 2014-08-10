# Git

Git is a free and open source distributed version control system. Basically, it allows more people to work together on the same code, saving a version history, merge different versions of the same file and much, much more.

In the spirit of the rough guide I'll point you in the right directions since so many others before me explain and understand Git on a level I'll probably never reach.

## The simplest Git workflow

You write some code on a project on your computer. In other words, you create local changes. What you want now is to choose which of those changes you want to keep and share with the

Commit local changes
git add .
git commit -m "message"

**Pull remote changes (with rebase)**
git pull --rebase

1. Temporarily stash your local commits,
2. Pull the online commits,
3. Apply the stashed commits on top of what just got pulled
4. if there are any merges to be made, do them, add them and continue the rebase. Like so:
5. git add .
6. git rebase --continue

**Push changes online**
git push

## Avoiding conflicts with rebase

## Git conventions

As with everything else, it’s important to keep conventions when working with Git. One helpful idea is to prefix commit messages with common verbs like “add”, “remove”, “update”, “refactor”, “fix” for example.

See more on https://medium.com/code-adventures/a940ee20862d

## GUI for Git

Having an interface for Git helps a lot. Github.com is one way, Bitbucket.com is another but there are also native apps to accompany you. I recommend Sourcetree as the most helpful.

- http://www.sourcetreeapp.com/
- http://mac.github.com/
- http://windows.github.com/
- http://www.git-tower.com/

### See more

- http://www.git-tower.com/learn/
- http://git-scm.com/book
- https://help.github.com/
- http://think-like-a-git.net/ - Git really isn't made for human beings. Think Like (a) Git is a guide for the perplexed that should help smoothen things out
- https://pinboard.in/u:rough/t:git/
- http://www.integralist.co.uk/posts/git-tips/
- A visual Git reference http://marklodato.github.io/visual-git-guide/index-en.html
- http://bradfrostweb.com/blog/post/gitgithub-resources/
- http://try.github.io/
- http://24ways.org/2013/git-for-grownups/
