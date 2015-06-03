---
title: Setting up SSH with Bitbucket
---

If you set up an SSH-key you won't have to enter your username and password every
time you do something on BitBucket or GitHub.

First you need to generate an SSH-key on your computer. To check if you have one,
write this in the Terminal:

## Check if you have an SSH-key

`$ ls -a ~/.ssh`

If it only shows 'known_hosts' you don't have a key.
If you have some `id` or `rsa` stuff, you have one.

## Generating an SSH-key

To create a key, enter this:

`$ ssh-keygen`

… and follow the instructions to enter a passphrase of your choice.

## Getting the SSH-key

To use it, you need to copy the contents of the key (it's a text file) into
Bitbucket.

On Linux, enter this and copy what the Terminal returns:

`$ cat ~/.ssh/id_rsa.pub`

On OS X, enter this (which will automatically copy it):

`$ pbcopy < ~/.ssh/id_rsa.pub`

## Adding the SSH-key

Go to bitbucket.com and find your account page where you'll find the 'SSH keys' page.

Add a new and copy in the key which you got in the previous step. The first time
you use it it'll ask for your passphrase.

Done!
