# Naming conventions

Naming conventions help ensure consistency in your code. It helps you remember what is what and it avoids confusion by distinguishing different types. It makes things easier.

If you're not working in a team but alone it will help you a lot. If you're writing code together with others you will quickly realize that it is in fact neccesary to enforce a naming convention.

Here are some pointers:

- Be consistent
- Think in components, its children and its modifiers
- Find repeatable patterns
- Don't worry about component/module/base confusion. It's different what people choose to call it but in the end it is all the same
- Pick a system that works for you and your team


## THE naming convention

This convention is tested, it works and it *will* help you differentiate your classes and allow you to write cleaner, more maintanable code.

```
.namespace-ComponentName-descendantName--modifier {}
.ComponentName {}
.ComponentName-descendantName {}
.ComponentName--modifierName {}
.is-stateOfModule {}
```

## Prefixed classes or chained classes?

Example of chained classes: `<element>`
Example of prefixed classes: `<element>`

Chaining classes leads to confusing as to what the base class is. Is it module? Is it big? Using prefixed classes solves this and removes some of the cascade, which can be very helpful.

### See more

- [SUIT naming conventions](https://github.com/suitcss/suit/blob/master/doc/naming-conventions.md)
- [SUIT Components and examples of naming conventions](https://github.com/suitcss/suit/blob/master/doc/components.md#naming-conventions)
- https://github.com/montagejs/montage/wiki/Naming-Conventions
- http://markdotto.com/2012/02/16/scope-css-classes-with-prefixes/
- http://csswizardry.com/2013/01/mindbemding-getting-your-head-round-bem-syntax/
