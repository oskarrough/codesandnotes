---
title: Improving initial render time
---

Even though a feature-heavy page might need more than ten seconds to fully load, we can improve the initial render time by lazy-loading non-critical assets. Or in non technical terms: the website loads the bare minimum to render the first visible screen as fast as possible.

This is extremely important not only to keep a smooth navigation flow throughout the website but to keep the user’s interest.

## Critical CSS

Using https://github.com/addyosmani/critical it's possible to automatically generate the critical (read: required) CSS to render the initial 600px, for example.
