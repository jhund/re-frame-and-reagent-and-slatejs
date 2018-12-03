# re-frame and reagent and slatejs

This repo contains example code illustrating how to integrate the slatejs editor with a re-frame (and reagent) clojurescript app.

It's an advanced use case with the following features:

* Multiple editable sections exist on the page. One can be edited at a time. Select a section to edit by clicking on its card.
* Shared toolbar, separate from the editor. Acts on the currently selected editor.
* Bold and italic formatting via toolbar or keyboard shortcuts.
* Persistence of edited text into re-frame app-db (as HTML).
* Used in production with 1K editable sections on a single page.

## Demo

You can view the [demo](https://jhund.github.io/re-frame-and-reagent-and-slatejs/index.html).

## Some notes

Integrating SlateJS into re-frame/reagent is a bit tricky for advanced uses. There are some portions that are not idiomatic re-frame/reagent. E.g., we use regular atoms to cache editor values, and the editor reference.

The code is well commented. I would start exploring at (src/cljs/rrs/ui/slatejs/views.cljs)[https://github.com/jhund/re-frame-and-reagent-and-slatejs/blob/master/src/cljs/rrs/ui/slatejs/views.cljs] where the SlateJS editor is being rendered.

npm dependencies are handled separately and included via bundle.js file. The approach follows [Tomer Weller's recipe](http://blob.tomerweller.com/reagent-import-react-components-from-npm).

## Play with the code yourself

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

To compile clojurescript to javascript:

```
lein clean
lein with-profile production cljsbuild once min
```
