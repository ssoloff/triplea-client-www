## Build Automation Tools

#### `npm run build` (`build.js`)

* Cleans up the output folder (`clean.js`)
* Copies static files to the output folder (`copy.js`)
* Creates application bundles with Webpack (`bundle.js`, `webpack.config.js`)

#### `npm run clean` (`clean.js`)

* Cleans up the output folder

#### `npm run coverage:publish` (`coverage-publish.js`)

* Publishes coverage metrics to coverage tracking service

#### Misc

* `run.js` - Helps to launch other scripts with `babel-node` (e.g. `babel-node tools/run clean`)
* `webpack.config.js` - Webpack configuration for both client-side and server-side bundles
