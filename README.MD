## JONATHANAIDAN.COM

### Dependencies

The setup and build processes depends on [npm](https://www.npmjs.com/)

### Setup

The site uses [gulp](http://gulpjs.com/) for build pipelines and [browser-sync](https://github.com/Browsersync/browser-sync) to serve content and provide watchers for the source.
Run the following to collect all dependencies, compile the source, and serve it with browser-sync:

```bash
npm install
npm start
```

### Build

The site can be built with the following standalone task:

```bash
npm run build
```

This will collect all the content in the `src/` directory, compile/concatenate, and output to the `build/` directory.
Each invocation of build will clean the `build/` directory before executing a rebuild.
