# minimal p2p js site


## v1 - hello world

Run this to take your `index.js` and convert all the fancy node scripts into a browser friendly `bundle.js`.

```
npm run build
```

This script is defined in your `package.json`.
I encourage you to go check out the output `bundle.js` as this project gets more complicated ... what's in there?

Note the `.gitignore` and `.datignore` files - these tell git and DAT what to ignore ... they're _crucial_.

New deps:
- [yo-yo](https://github.com/maxogden/yo-yo): a sick and ultra-light templating + dom-manipulation tool
- [browserify](https://github.com/browserify/browserify): makes node code browser friendly


## v2 - basic routing

Add a mutiple pages and a router to jump us between those pages.

Remember that you need to run `npm run build` to compile a new `bundle.js` any time your change your source files.

New deps:
- [sheet-router](https://github.com/yoshuawuyts/sheet-router): simple router with nice click handler 


## v3 - refactor templates, build tools

Running that build script manually all the time is a drag, so lets add a live rebuilding tool called `watchify`.
Start it watching and building using the new script in the `package.json` : `npm run watch`

Extract the pages and router out into seperate files, chuck them in a `source` folder.

New deps: 
- [watchify](https://github.com/substack/watchify)

