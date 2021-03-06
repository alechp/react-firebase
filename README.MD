<h1>React Firebase</h1>
I was playing with create-react-app and firebase this weekend. 
Realized that there are some configuration issues which I wouldn't to iron out.
This is a starting point for future react-firebase apps for myself. Feel free to use/fork.

<h4>Table of Contents</h4>
* [Firebase](#Firebase)
* [Getting Started](#GettingStarted)
* [Docs](#Docs)
* [Stack](#Stack)


-------------
<h2 id="Firebase">Firebase</h2>
Why use?

<h4>Pros</h4>
* Free SSL included (i.e. imagine integrated [Let's Encrypt](https://goo.gl/WY8sZT))
* Easy custom domain management (i.e. imagine easy [Route53](https://goo.gl/klcGZq))
* Integrated OAuth management (i.e. imagine a slim version of [Auth0](https://goo.gl/4S7WYp))
* Easy host deployment (i.e. imagine [surge.sh](https://goo.gl/s0dK7T) with more robust environment)
* Easy state management (i.e. imagine a highly-restrictive [Relay](https://goo.gl/r54eBC) framework)
* Free or cost-effective
* Built atop rest of Google Cloud (i.e. easily integrated with [Google Container Engine](https://goo.gl/MMB9xH), [Storage](https://goo.gl/IBLlPr), etc. 

<h4>Cons</h4>
* Extreme vendor lock-in
* Their database GUI is clunky IMO
* JSON Tree utilize recursive queries. As a result, you're limited from nesting data. They allow 32 levels, but strongly advise keeping data shallow.

-------------
<h2 id="GettingStarted">Getting Started</h2>

To avoid typing `npm run` repeatedly, check out [ALIAS](docs/ALIAS.MD)

----------

**Develop**
```
npm i
npm start
```

**Test**
```
npm run test
```

**Deploy**
```
nano package.json -> replace "homepage" with your project name
nano .firebaserc -> add your firebase project name here
npm run fireup
```

----------

<h2 id="Docs">Docs</h2>

<h4>Active</h4>
| Name | Description | 
|:-----|:------------| 
| [ALIAS](docs/ALIAS.MD) | How to import aliases for this project |
| [ROADMAP](docs/ROADMAP.todo) | What to expect going forward |

-------------

<h2 id="Stack">Stack</h2>
* View => React 
* BaaS => Firebase 
* Display => [CSS Modules, Flexbox & SASS]
* Design Framework => Material-UI
* Build Tools => [Babel, Webpack]
* Development Tools => [Flow]