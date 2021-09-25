<img align="right" src="./res/logo.png" height="100" width="100" />

# Auto NPX

Auto resolving local Node.js binaries in VS Code terminal.

<a href="https://marketplace.visualstudio.com/items?itemName=antfu.auto-npx" target="__blank"><img src="https://img.shields.io/visual-studio-marketplace/v/antfu.auto-npx.svg?color=228cb3&amp;label=" alt="Visual Studio Marketplace Version" /></a>

### Usage

When you have packages installed locally, just call it without `npx`! (and you don't need to install them globally anymore)

```diff
- $ npx vite
+ $ vite

- $ npx jest
+ $ jest

- $ npx -p typescript tsc
+ $ tsc

- $ npx -p webpack-cli webpack
+ $ webpack
```

### How

When you open up a terminal in VS Code, this extension injects `PATH` env variable with the local Node.js binaries.

```bash
export PATH=$PWD/node_modules/.bin:$PATH
```

And that's it!

The `PATH` modification will only affect the current session so no worries about your other environments.
