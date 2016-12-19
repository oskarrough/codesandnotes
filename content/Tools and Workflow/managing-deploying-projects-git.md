---
title: Managing and deploying projects with Git
---

The most powerful git feature is branching. It allows you to weave code together and work on multiple features as a team. Git Flow and GitHub Flow are two similar git workflows designed to make us more productive.

> Anything in the master branch is deployable

You never commit to the `master` branch. Instead new features are created in branches. Once a feature is complete, a pull request is opened (on github or bitbucket), a colleague does a review and once it’s approved, the branch can be merged into `master` and is then deleted.

Every time you merge in to master an automatic deploy should be made . This is to emphasize This includes bumping the version number.

 If you develop features directly in the master branch, you won’t be able to deploy because it will contain unfinished code.

To achieve this, we use git branches. All the work you do should be done in a branch.
Never work in master. Master is only used to merge in other branches and to deploy from. Use a descriptive name for your branch.

## Git Flow versus Github Flow

There are two popular workflows, the original Git Flow and Github Flow. The main difference being that Git Flow works with master and develop branches. All new features are branched off develop. Hotfixes are branched off master.

Github Flow on the other hand doesn’t have a develop branch. Everything is branched off master and when a branch is finished, a pull request is opened to review and finally merged back into master. Once in master we should deploy automatically.

Git Flow is more work and if you’re deploying several times a day it can be really tedious. On the other hand it provides a develop branch where you can rest and test all branches together before deploying. Interestingly Github does not use Git Flow for any projects. And if it’s enough for developing Github I’m sure it’s enough for what we do.

http://stackoverflow.com/questions/18188492/what-are-the-pros-and-cons-of-git-flow-vs-github-flow

## Workflow example

Create a branch of master

- `git checkout master`
- `git checkout -b my-feature`

Finish your feature/fix or whatever you are doing

- `git commit -m "Add new feature"`

Get a review on your code using a BitBucket pull request (or someone looking over your shoulder. This includes proper testing.

Merge it into master

- `git checkout master`
- `git merge my-feature --no-ff`

## Deploying

Once everything is merged and you’re ready to deploy, it’s important to tag the release using git tags (and in package.json) to know, which version was deployed. This makes it a lot easier to track down bugs but only works, if everyone follows the pattern.

## Required reading

https://www.atlassian.com/git/tutorials/comparing-workflows/
https://guides.github.com/introduction/flow/
https://www.atlassian.com/git/tutorials/comparing-workflows/feature-branch-workflow
https://github.com/petervanderdoes/gitflow-avh
http://jeffkreeftmeijer.com/2010/why-arent-you-using-git-flow/
https://gist.github.com/jbenet/ee6c9ac48068889b0912
https://www.nczonline.net/blog/2013/05/21/github-workflows-inside-of-a-company/

## Git Flow

To work on something new, create a descriptively named branch off of master (ie: new-sidebar-design). Commit to that branch locally and regularly push your work to the same named branch on the server. When you need feedback or help, or you think the branch is ready for merging, open a pull request. After someone else has reviewed and signed off on the feature, you can merge it into master. Once it is merged and pushed to ‘master’, you can and should deploy immediately
