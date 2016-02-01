---
title: Sitenote test
draft: true
---

Naming conventions make things easier by ensuring consistency in your code. It is an educated pattern for naming things.

Especially if you're working as a team it will benefit you a lot. As you're writing code with others you'll realise that it is in fact necessary to enforce a naming convention to stay sane.

One of the most distinctive features of Tufte’s style is his extensive use of sidenotes <small>This is a sidenote</small>. Sidenotes are like footnotes, except they don’t force the reader to jump their eye to the bottom of the page, but instead display off to the side in the margin. Perhaps you have noticed their use in this document already. You are very astute.

One of the most distinctive features of Tufte’s style is his extensive use of sidenotes.<label for="sn-extensive-use-of-sidenotes" class="note-toggle note-number"></label><input type="checkbox" id="sn-extensive-use-of-sidenotes" class="note-toggle"/><span class="note note--side">This is a sidenote.</span>. Sidenotes are like footnotes, except they don’t force the reader to jump their eye to the bottom of the page, but instead display off to the side in the margin. Perhaps you have noticed their use in this document already. You are very astute.

If you want a sidenote without footnote-style numberings, then you want a margin note.<label for="mn-demo" class="note-toggle">&#8853;</label><input type="checkbox" id="mn-demo" class="note-toggle"/><span class="note">This is a margin note. Notice there isn’t a number preceding the note.</span>. On large screens, a margin note is a sidenote that omits the reference number. This lessens the distracting effect taking away from the flow of the main text, but can increase the cognitive load of matching a margin note to its referent text. However, on small screens, a margin note is like a sidenote except its viewability-toggle is a symbol rather than a reference<label for="sn-distracting-effect" class="note-toggle note-number"></label><input type="checkbox" id="sn-distracting-effect" class="note-toggle"/><span class="note note--side">When I say distracting effect I really don't know what I actually mean.</span> number. This document currently uses the symbol &#8853; (<span class="code">&amp;#8853;</span>), but it’s up to you.

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

### Resources

- [SUIT naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- [SUIT Components and examples of naming conventions](https://github.com/suitcss/suit/blob/master/doc/components.md#naming-conventions)
- [MindBEMding - getting your head 'round BEM syntax](http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/)
