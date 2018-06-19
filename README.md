# Duosecurity Node Client

[![NPM](https://nodei.co/npm/duo-api.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/duo-api/)

- [Quick Start](#quick-start)
- [API Reference and examples](API.md)
- [Reporting Issues](#reporting-issues)
- [Development](#development)
  - [Testing](#testing)

---

# Quick Start

First:

```bash
npm install duo-api
```

Then:

```js
var Client = require('duo-api');
```
Then: [Create a `Client`](API.md/#new-clientconfig---client).

Finally: [Make a request](API.md/#requestmethod-path-params-function-cberror-response---promise).

# Reporting Issues

Something not working? Found a bug? Got a question? Feature request? [Open an issue](https://github.com/alexkolson/node-duo-api/issues/new) and we'll get on it!

# Development

We love contributions and will gladly accept yours! Here's how you can contribute:

1. Fork the repo.
2. Make your changes.
3. Add tests as needed.
4. Submit a pull request.

## Testing

To run the tests on your local machine, create three environment variables:
 
- `DUO_API_HOST`: Duo api host. 
- `DUO_API_IKEY`: Duo api integration key.
- `DUO_API_SKEY`: Duo api secret key.

After setting the environment variables, run `gulp test`.

```bash
git clone git@github.com:BYU-OIT/node-duo-api.git # Or your own fork.
cd node-duo-api/
export DUO_API_HOST=api-XXXXXXXX.duosecurity.com
export DUO_API_IKEY=XXXXXXXXXXXXXXXXXXXX
export DUO_API_SKEY=XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
npm install -g gulp # If you don't have gulp installed already.
npm install # Install dependencies.
gulp test
```

You can have gulp run the tests on any code change by running `gulp watch` in the root of the repository.

# Contributors

Thanks to the following awesome people for helping make module better! =>

- [Josh Nichols](https://technicalpickles.com) ([@technicalpickles](https://github.com/technicalpickles))
