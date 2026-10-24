# @x12i/ai-registry-client usage example

HTTP client for the hosted x12i AI registry. Registry data stays on the service, so this package does not ship dataset JSON.

This consuming application demonstrates **read a registry dataset through an injected http fixture** using the published npm package, pinned to `0.2.0`.

## Run

Requires Node.js 24 or newer and npm. The example needs no service credentials.

```sh
npm install --ignore-scripts
npm start
```

## Example

[`src/index.mjs`](src/index.mjs) contains the complete example. Assertions check the demonstrated behavior and the program prints a small result.

## When to use the package

- Read hosted model and availability information without bundling registry datasets in a client.
- Point a registry consumer at an explicit service origin or injected fetch implementation.

## Links

- [npm package](https://www.npmjs.com/package/@x12i/ai-registry-client)
- [Implementation monorepo](https://github.com/x12i/ai-profiles)
- [Reviewed package source](https://github.com/x12i/ai-profiles/tree/8efd4dc11dfaacab2ceef9f030a4a3fa7da00800/packages/ai-registry-client)

The `package.json` in this repository is private to prevent accidental publication of the example application under an npm package name.
