---
title: "Gzipping"
---

When assets are requested we minify them to compress them as much as possible for performance. However, you can also compress what's sent from the server with gzip. First of all you'll need a web server with gzip support. You're probably using Apache or nginx. Here are two methods using Apache. The following snippets go into a `.htaccess` file in the document root of your server.

**One method**

```bash
<ifModule mod_gzip.c>
mod_gzip_on Yes
mod_gzip_dechunk Yes
mod_gzip_item_include file .(html?|txt|css|js|php|pl)$
mod_gzip_item_include handler ^cgi-script$
mod_gzip_item_include mime ^text/.*
mod_gzip_item_include mime ^application/x-javascript.*
mod_gzip_item_exclude mime ^image/.*
mod_gzip_item_exclude rspheader ^Content-Encoding:.*gzip.*
</ifModule>
```

**Another method**

```bash
<IfModule mod_deflate.c>
AddOutputFilterByType DEFLATE application/atom+xml \
  application/javascript \
  application/json \
  application/rss+xml \
  application/vnd.ms-fontobject \
  application/x-font-ttf \
  application/xhtml+xml \
  application/xml \
  font/opentype \
  image/svg+xml \
  image/x-icon \
  text/css \
  text/html \
  text/plain \
  text/x-component \
  text/xml
</IfModule>
```

### References

- http://www.feedthebot.com/pagespeed/enable-compression.html
- http://checkgzipcompression.com/
- http://betterexplained.com/articles/how-to-optimize-your-site-with-gzip-compression/
