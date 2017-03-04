# Environment
Building Applications with React and Flux
Pluralsight

## Goals:
Just type `gulp` to start:
- compile jsx
- lint jsx and js
- bundle js and css
- migrate app to dist
- run a dev web server
- reload the browser upon save

Final setup can be found [here](https://github.com/coryhouse/react-flux-starter-kit)

## Notes:
The setup we're using uses Gulp to watch our files and rebuild them into a `/dist` directory. We're using `connect` to create a simple server that will start when we run `gulp` and reload whenever our files change. Finally, we're using `browserify` to bundle our code into a single `.js` file, and compile our `jsx` into regular javascript.
