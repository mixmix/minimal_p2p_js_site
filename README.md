# minimal p2p js site


# v1 - hello world

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

