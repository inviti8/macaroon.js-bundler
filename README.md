# macaroons.js-bundler

&nbsp;

Project allows you to build macaroons.js js bundle.

&nbsp;

This is a webpack bundler for [macaroons.js](https://github.com/nitram509/macaroons.js/).  Which will enable you to use the library client side. 

&nbsp;1. Clone the repo, cd into it.

2. npm install (to install dependencies.)

3. npm run build (to build the bundle)

The bundle can then be imported client side. The 'MacaroonsBuilder' class will be available as 'window.MacaroonsBuilder'.

```js
let location = "http://www.example.org";
let secretKey = "this is our super secret key; only we should know it";
let identifier = "we used our secret key";
let macaroon = window.MacaroonsBuilder.create(location, secretKey, identifier);
```

&nbsp;