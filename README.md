# re-frame and reagent and slatejs

This repo contains example code illustrating how to integrate the slatejs editor with a re-frame (and reagent) clojurescript app.

## Development Mode

### Figwheel

Cd into `<app_root>`

```
lein clean
rlwrap lein figwheel dev
```


Figwheel will automatically push cljs changes to the browser.

Wait a bit, then browse to [http://localhost:3449](http://localhost:3449).

### npm-webpack

We use npm and webpack separately from CLJS. We isolate this in a folder named `npm-webpack`. This is required so that there is no `node_modules` folder in `<app_root>` as cljs would pick it up and auto process it as module dependencies. We'd end up with those dependencies twice.

Cd into `<app_root>/npm-webpack`

```
npm install
npm run watch
```

This will compile all dependencies into `resources/public/js/bundle.js`.

Include this file in `index.html`.


### Run cljfmt

`lein cljfmt check src/cljs/`

or

`lein cljfmt fix src/cljs/`

## Production Build

This repo does not support a production build.
