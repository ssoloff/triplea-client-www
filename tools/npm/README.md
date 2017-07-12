## Build Automation Tools

#### `npm run build` (`build.js`)

* Cleans up the distribution folder (`clean-dist.js`)
* Copies static files to the distribution folder (`copy.js`)
* Creates application bundles with Webpack (`bundle.js`, `webpack.config.js`)

#### `npm run clean` (`clean.js`)

* Cleans up the entire output folder

#### `npm run clean:dist` (`clean-dist.js`)

* Cleans up the distribution folder

#### Misc

* `run.js` - Helps to launch other scripts with `babel-node` (e.g. `babel-node tools/run clean`)
* `webpack.config.js` - Webpack configuration for both client-side and server-side bundles
