---
title: Naming conventions for the front-end
date: 2014-01-06
---

Naming conventions make things easier by ensuring consistency in your code. It is an educated pattern for naming things.

Especially if you're working as a team it will benefit you a lot. As you're writing code with others you'll realise that it is in fact necessary to enforce a naming convention to stay sane.

In this post I'm mainly talking about naming conventions from a front-end development perspective.

Here are some pointers:

- Be consistent
- Identify patterns
- Think in components, their children and their modifiers
- Don't worry about component/module/block naming confusion (mostly different names for the same thing).
- Pick a system that works for you and your team

## The naming convention

This convention is tested, it works and it _will_ help you differentiate your classes and allow you to write cleaner, more maintanable code. We've been using it on my team on several projects and Twitter is using it. It is from the [SUIT](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md) library.

    .namespace-ComponentName-descendantName--modifier {}
    .ComponentName {}
    .ComponentName-descendantName {}
    .ComponentName--modifierName {}
    .is-stateOfModule {}

### References

- [SUIT naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- [SUIT Components and examples of naming conventions](https://github.com/suitcss/suit/blob/master/doc/components.md#naming-conventions)
- [MindBEMding - getting your head 'round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
