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
