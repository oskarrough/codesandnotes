---
title: Drush
draft: true
---
SSH into your server.

Now download the [Drush release you want](https://github.com/drush-ops/drush/releases):

```wget https://github.com/drush-ops/drush/releases/download/8.0.1/drush.phar```

Give it the right permissions:

```chmod +x drush.phar```

Next rename it to `drush` and move it to a folder in your `path`.
You can check your path by doing:

```echo $PATH```

In my case, I did:

```mv drush.phar /bin/oskarrough/bin/drush

Now run:

```drush```

And you should be good to go!
