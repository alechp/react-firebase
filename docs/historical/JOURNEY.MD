<h1>Journey</h1>

Goal of this doc is to explain the journey from command line to interactive application.

Below was part of my discovery / journey while moving from create-react-app to a firebase friendly, CSS-modules, sass-enabled fullstack boilerplate.


<h2>Updating react components</h2>
<h4>Oct 17th, 2016</h4>
Goals for this are adding react router and allowing for lazy loading of components. 

0. Create components directory
1. Create directory for each individual component 
2. Rename component, test & style files to index.js, test.js and style.css respectively
3. Remove react logo.svg (this is used for the "hello world" of [create react app](https://github.com/facebookincubator/create-react-app) )
4. Create helpers directory
5. Add routes file with react-router configuration 
6. Add firebase file with firebase config initialized. This will be used in all components that sync with database
7. Install [react-css-modules](https://github.com/gajus/react-css-modules)
8. Enable [source maps in webpack](https://github.com/gajus/react-css-modules#enable-sourcemaps)
9. Make components export CSSModules(Component, stylesFileReference)
10. Install [babel-plugin-react-css-modules]()
11. Install [Extract Text Webpack Plugin](https://github.com/webpack/extract-text-webpack-plugin)
12. Install [node-sass](https://github.com/sass/node-sass)

Current issue with webpack trying to load babel

```
Error in ./src/components/App/style.scss
Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example
 @ ./src/components/App/index.js 18:13-36
```

------------

<h2>Deploying Create-React-App to Firebase</h2>
<h4>Oct 16th, 2016</h4>


1. Scaffold initial project with create-react-app
2. Install react-router and firebase
3. Running npm run eject. Context: For some reason, the non-ejected create-react-scaffold doesn't like when I deploy to Firebase. Barebones app runs fine on localhost, but fails to run on firebase. I've even added the homepage key/value pair in package.json & still nothing worked. 
4. Change the appPublic and appHtml path in `config/paths.js`
5. Changed them back
6. Updated the hosting "public" keyvalue to "/build" instead of "/public". At this point, local still works fine but firebase deploy isn't pulling proper directory.
```
Failed to load resource: the server responded with a status of 400 ()
```
7. Ran below to see if this would help update anything
```
  npm install -g pushstate-server
  pushstate-server build
  open http://localhost:9000
```
8. Update database.rules.json ... read & write both set to true. Need to configure auth once app is available to public 
9. Ran "build" by itself
10. Ran "firebase deploy" by itself
11. Now it's working on Firebase... It's no longer showing the old public index.html. Should have been testing in incognito to provide more accurate recreation


------------
