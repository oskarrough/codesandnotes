---
title: "Versioning"
---

Software updates bring new features, break old ones and are sometimes forced on you. If your software is dependent on other software you will rely on versioning to make sure your a third-party update doesn't break your own software.

This is extremely important when you're dealing with software. If you rely on software or if others are relying yours. Not so much if you're developing a website for your parents.

## Semantic Versioning

Semantic Versioning (SemVer) is a specification designed to solve "dependency hell" by following a simple set of rules when versioning your software.

Repeat after me:

> MAJOR.MINOR.PATCH

> Given a version number MAJOR.MINOR.PATCH, increment the:

> MAJOR version when you make incompatible API changes,
MINOR version when you add functionality in a backwards-compatible manner
PATCH version when you make backwards-compatible bug fixes.

What?

MAJOR: When you add something that breaks earlier versions
MINOR: When you add something that does not break earlier versons
PATCH: When you only fix something (without breaking something else)

### Resources

- [Semantic Versioning](http://semver.org/)
- [The fear of 1.0.0](http://jeremyckahn.github.io/blog/2013/12/29/the-fear-of-1-dot-0-0/)
