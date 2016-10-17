<h1>Debugging</h1>

This is a compatible doc for the JOURNEY. Realized that I was cluttering the Journey because I was trying to debug while documenting steps. This is to identify the "right path" before adding to the Journey doc.

-----------

Current error:
```
Error in ./src/index.js
Module not found: ./components/App/styles.css in /Users/alechp/Code/projects/kisoro/.repos/website/k3/src

 @ ./src/index.js 17:14-52

Error in ./src/components/App/style.scss
Module build failed: Error: "extract-text-webpack-plugin" loader is used without the corresponding plugin, refer to https://github.com/webpack/extract-text-webpack-plugin for the usage example
 @ ./src/components/App/index.js 18:13-36
 ```

 Instead of using ExtractTextWebpack, decided to list the loaders sequentially. Including sourcemaps:
 ```
 loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap',
        ],
```


Partial Fix:
* Had to remove the call to styles in the index file (style should only be included on component level)
* Install sass-loader (thought I already did this...?)


Still getting document issue

```
Error in ./src/components/App/style.scss
Module build failed: ReferenceError: document is not defined
 @ ./src/components/App/style.scss 4:14-289 13:2-17:4 14:20-295

```
Noticed that in my webpack config (jacked from quicky) I added resolve url loader. Installing dep now

YEP ! That's all folks. 


Summary:
1) Ditch ExtractTextWebpack
2) Install resolve-url-loader


Continuation of same issue --

When calling Fireup, I get this response:
```
Creating an optimized production build...
Failed to create a production build. Reason:
Module parse failed: /Users/alechp/Code/projects/kisoro/.repos/website/k3/src/components/App/style.scss Unexpected token (1:0)
You may need an appropriate loader to handle this file type.
SyntaxError: Unexpected token (1:0)
    at Parser.pp$4.raise (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:2221:15)
    at Parser.pp.unexpected (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:603:10)
    at Parser.pp$3.parseExprAtom (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1822:12)
    at Parser.pp$3.parseExprSubscripts (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1715:21)
    at Parser.pp$3.parseMaybeUnary (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1692:19)
    at Parser.pp$3.parseExprOps (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1637:21)
    at Parser.pp$3.parseMaybeConditional (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1620:21)
    at Parser.pp$3.parseMaybeAssign (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1597:21)
    at Parser.pp$3.parseExpression (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:1573:21)
    at Parser.pp$1.parseStatement (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:727:47)
    at Parser.pp$1.parseTopLevel (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:638:25)
    at Parser.parse (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:516:17)
    at Object.parse (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/node_modules/acorn/dist/acorn.js:3098:39)
    at Parser.parse (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/lib/Parser.js:902:15)
    at DependenciesBlock.<anonymous> (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack/lib/NormalModule.js:104:16)
    at DependenciesBlock.onModuleBuild (/Users/alechp/Code/projects/kisoro/.repos/website/k3/node_modules/webpack-core/lib/NormalModuleMixin.js:310:10)
```

Need to take a look at webpack.config.prod.js
Add the same scss loader from dev:

{
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: [
          'style?sourceMap',
          'css?modules&importLoaders=1&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
          'resolve-url',
          'sass?sourceMap',
        ]
      },

NOTE: Should disable source maps though
-----------


