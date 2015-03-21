## Local Drupal development on OS X using Vagrant

https://www.drupal.org/project/vdd
https://www.drupal.org/node/2008792

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
