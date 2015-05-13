---
title: "Local Wordpress development on OS X"
---

Vagrant together with VirtualBox allows you to create portable virtual machines development. For instance, you no longer have to fiddle around with MAMP or LAMP or whatever when you're doing local PHP development.

Instead you install a box using Vagrant. This box can easily be shared with your coworkers and it doesn't pollute your computer with scripts and installs everywhere.

## Getting started with Vagrant

First, install [Vagrant](http://www.vagrantup.com/downloads.html) and [VirtualBox](https://www.virtualbox.org/wiki/Downloads).

1) Install Vagrant
2) Install VirtualBox

## Configuring a box for Drupal development

https://www.drupal.org/project/vdd

## Configuring a box for Wordpress development with VVV

https://github.com/Varying-Vagrant-Vagrants/VVV

## Configuring a box for Wordpress development with Vagrantpress

Next up is choosing a box to use. For this example we're going with [Vagrantpress](https://github.com/chad-thompson/vagrantpress) which is a Ubuntu preconfigured for Wordpress development.

3) `git clone https://github.com/chad-thompson/vagrantpress`
4) `cd vagrantpress`
5) `vagrant up` (this will download 500mb the first time)

The `vagrant up` will start the box.

You now have a brand new Wordpress install available:

http://localhost:8080/wp-admin/ (admin/vagrant)

You can access phpMyAdmin:

http://localhost:8080/phpmyadmin/ (wordpress/wordpress)

Check the Vagrantpress documentation for more.

## Extending Wordpress with Timber

[Timber](http://jarednova.github.io/timber/) extends Wordpress with the Twig templating engine, also used by Drupal 8 and seperates logic from presentation by giving you two files for every page. For instance: a page.php for getting data from Wordpress and a page.twig for the markup. And it doesn't have [any measurable performance hit](https://github.com/jarednova/timber/wiki/Performance).

6) [How to install Timber](https://github.com/jarednova/timber/wiki/Getting-Started%3A-Setup)

## Controlling Vagrant

To power up your vagrant box:
	vagrant up
To access your box via ssh:
	vagrant ssh
To suspend your vagrant box:
	vagrant suspend
To shut down your vagrant box:
	vagrant halt
To destroy your vagrant box (this will remove it completely):
	vagrant destroy

## Extras

If you're using Sublime Text, be sure to install the the PHP-TWIG package to get proper syntax highlighting.

https://getcomposer.org/doc/00-intro.md#globally-on-osx-via-homebrew-

brew update
brew tap homebrew/dupes
brew tap homebrew/php
brew install composer

<!-- brew install php56 composer -->

cd ~/MYSITE/wp-content/plugins
git clone git@github.com:jarednova/timber.git
cd timber
composer install
