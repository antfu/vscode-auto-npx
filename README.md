<img align="right" src="./res/logo.png" height="100" width="100" />

# Auto NPX

Auto resolving local Node.js binaries in VS Code terminal.

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
