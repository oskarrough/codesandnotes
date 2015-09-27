---
title: Using Susy for layout and grids
date: 2012-06-11
tags: ["Front-end","Grids","Layouts","susy"]
---

Although it might sometimes feel like it, creating a two-column layout with CSS is not magic. It's mathematics. [Susy](http://susy.oddbird.net/) is a Sass library that helps you create CSS layouts by abstracting all the math through powerful mixins and Sass functions. There are no enforced classes or anything like it, you pass some configuration to Susy and it will know what to do.

Friends don't let friends rely on magic.

But before continuing down the path of floating layouts, you might want to brush off your Flexbox skills. See [getting started with Flexbox](http://codesandnotes.com/getting-started-with-flexbox/).

## Installing Susy

Susy is available as a gem and you should read the official guide on [Getting started with Susy](http://susy.oddbird.net/guides/getting-started/#start-install).

## From Susy 1 to Susy Next

As of this writing Susy 2 (also called next) is in beta and it's important to note that the syntax has been massively improved and the way you configure Susy is different. While the documentation is being updated be sure to check the source code of Susy. This article will only use Susy 2/Next.

## Configuring Susy

Susy has defaults for everything. That means it will work out of the box with zero configuration. However, chances are you want the columns and gutters to maintain a certain ratio, be fluid, be fixed or whatever you need.

There is no need for column-width in `fluid` layouts unless you specifically want the container-width calculated for you.

Gutters are established as a ratio to the size of a column. The default `1/4` setting will create gutters one quarter the size of a column. In asymmetrical grids, this is `1/4` the size of a single column-unit.

![Paige compositor from 1904](paige-compositor-1904.jpg)
