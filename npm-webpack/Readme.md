# Separate build area for npm packages

I decided to manage node packages independently of the cljs environment. I then include them as foreign-libs.

Build steps:

* `npm install`
* for dev: `npm run watch`
* for prod: `npm run build`
