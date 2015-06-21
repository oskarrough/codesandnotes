---
title: "Local Wordpress development with OS X and Vagrant"
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

## Local Drupal development on OS X using Vagrant

Here you'll learn how to create install Drupal in a virtual environment on your PC. This means you'll be able to sync, backup and locally do all your development which is both faster and safer.

First read about [VDD](https://www.drupal.org/project/vdd) and its [Getting Started with VDD](https://www.drupal.org/node/2008792).

Once it's running, you can learn how to install Drupal 7 or 8 here:

http://192.168.44.44/

After they're installed, use these two links:

http://drupal7.dev/
http://drupal8.dev/

Add this to your /etc/hosts file:

	# Sites declared in VDD's config.json
	192.168.44.44 drupal8.dev
	192.168.44.44 www.drupal8.dev
	192.168.44.44 drupal7.dev
	192.168.44.44 www.drupal7.dev
	# End of sites declared with VDD

https://github.com/geerlingguy/drupal-vm/

## How to install Drupal 8 using VDD

First cd into the vdd folder (where the vagrantfile is). Then run these commands:

```shell
vagrant ssh
cd ~/sites/drupal8
git clone --branch 8.0.x http://git.drupal.org/project/drupal.git .
drush @drupal8 si standard -y```

## Something else

1. Download and install VirtualBox
2. Download and install Vagrant
3. Install Ansible (mac/linux only)

Drush on webfaction

1. SSH in
2. cd bin (or mkdir bin; cd bin)
3. curl -sS https://getcomposer.org/installer | php55
4. php55 bin/composer.phar global require drush/drush:dev-master
