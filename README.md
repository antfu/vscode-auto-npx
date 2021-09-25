# Auto NPX

Auto resolving local Node.js binaries in VS Code terminal.

When you have packages installed locally, just call it without `npx`!

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
