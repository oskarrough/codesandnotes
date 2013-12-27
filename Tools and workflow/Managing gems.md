# Managing Gems

Gems are packages and the default format for sharing Ruby programs and libraries (though you could, theoretically, use it for anything).

Gems are shared through the package manager [RubyGems.org](http://rubygems.org). You are free to publish your own gems to the repository and RubyGems will make them available through their API.

The API can be accessed through the `gem` client. If you're on OS X you will probably have it already. You can verify by typing `gem` in the command line.

## Installing gems

To install the Sass gem you'd write:

`$ gem install sass`

If if asks for your password, you need to use `sudo` to install. Always try to avoid using sudo but for some reason Gems really enjoy sudo and it will not cause you any trouble.

`$ sudo gem install sass`

This will look up Sass on RubyGems.org, find the newest released version and install it globally on your system. If you wanted a specific version you would write:

`$ gem install sass -v 3.3.0.rc.2`

Sometimes the early/alpha/prerelease versions of Gems are also published and available under the `--pre` flag:

`$ gem install sass --pre`

If you want to get rid of a gem, use `gem uninstall sass`.

## Different gems for different projects

As soon as have more than one project chances are that they require different versions of the same gem. As gems are installed globally you will have a problem. If you work together with others it is very likely that they have a different setup.

To avoid these conflicts you want to manage gems on a project level. You do this using [Bundler](http://bundler.io/). You define what you need in a [`Gemfile`](http://bundler.io/v1.3/gemfile.html) (with uppercase 'G' and no file extension). The Gemfile needs to be in the root of your project. This is the same concept as NPM + packages.json and Bower + bower.json.

This way you define specifically which gems and versions your project needs and everything is defined in the Gemfile which makes it easy to share across systems (your co-workers).

Here's an example of a Gemfile:

```source 'http://rubygems.org'
gem "sass", "~> 3.3.0.rc.2"
gem "compass", "~> 0.13.alpha.12"
gem "susy", "~> 2.0.0.alpha.5"
gem "sass-css-importer"
gem "breakpoint", "~> 2.2.0"```

To install all this, you need to install [Bundler](http://bundler.io/).

`$ gem install bundle`

> "If any of the needed gems are already installed, Bundler will use them. After installing any needed gems to your system, bundler writes a snapshot of all of the gems and versions that it installed to Gemfile.lock."

## Making Compass understand

This one is easily missed. By default, Compass will use the global gems and not the ones defined in your Gemfile. To make Compass use them, you have to run Compass thorugh bundler like so:

`bundle exec compass watch`

## Making Compass understand through Grunt

Using grunt-contrib-compass you tell Compass to run its commands through bundler like this:

```compass: {
    options: {
        // Makes use of the local Gemfile
        bundleExec: true,
        // … where we have defined the following:
        require: ['breakpoint', 'susy', 'sass-css-importer']

				………… more options are normally here
    }
}```

### See more

- [RubyGems](http://en.wikipedia.org/wiki/RubyGems)
- [Bundler](http://bundler.io/)
- [The rationale of Bundler](http://bundler.io/v1.5/rationale.html)
