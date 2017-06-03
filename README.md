# {{name}}

> weex-starter-kit is a tool that can quickly build weex projects

## Install Cli

```bash
npm install weex-starter-cli -g
```

## getting start

1.create directory

```bash
mkdir helloweex
```

2.checkout directory

```bash
cd helloweex
```

3.init project

```bash
weex-starter-cli
```

4.init iOS

```bash
need bundle exec pod install // pod install
open project and run by Xcode // open project run project
```


## file structure

* `src/*`: all Vue's source code
* `app.js`: entrance of the Weex page
* `build/*`: some build scripts
* `dist/*`: where places generated code
* `assets/*`: some assets for Web preview
* `index.html`: a page with Web preview and qrcode of Weex js bundle
* `.babelrc`: babel config (preset-2015 by default)
* `.eslintrc`: eslint config (standard by default)

## npm scripts

```bash
# build in dev-server and run project
npm run dev

# build the js bundles for dev
npm run build:dev

# build the js bundles for qa
npm run build:qa

# build the js bundles for prod
npm run build:prod

# run api-server
npm run serve
```
