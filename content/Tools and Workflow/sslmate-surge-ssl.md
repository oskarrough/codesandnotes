---
title: How to configure sslmate+surge SSL certificate
draft: true
---

Remember to replace example.com with your own domain in all examples.

First [install sslmate](https://sslmate.com/help/getting_started#install). If you have homebrew on osx:

```
brew update
brew install sslmate
```

If you haven't already got a certificate, buy one:

```
sslmate buy example.com
```

It will prompt you for several things, try to follow the instructions.

Once certified, you'll receive four files. You can also download them anytime from sslmate.com.

```
example.com.chain.crt
example.com.chained.crt
example.com.crt
example.com.key
```

For surge, you need to combine two of them and upload it as `surge.pem`:

```
cat example.com.chained.crt example.com.key > surge.pem
surge ssl --pem ./surge.pem --domain example.com
```
