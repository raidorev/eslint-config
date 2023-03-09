# My ESLint configuration for TypeScript/Vue projects

This is my personal ESLint configuration for TypeScript/Vue projects. It uses quite a few plugins and have pretty strict rules.

## Installation

```bash
npm install --save-dev eslint prettier typescript @raidorev/eslint-config
```

```bash
yarn add --save-dev eslint prettier typescript @raidorev/eslint-config
```

```bash
pnpm add --save-dev eslint prettier typescript @raidorev/eslint-config
```

## Usage

In this configuration, the parserOptions.project is set to `./tsconfig.eslint.json` to allow typescript-eslint to work with TypeScript's type checking APIs. Here's an example of what this file might look like:

```json
{
  "extends": "./tsconfig.json",
  "include": [
    "src/**/*.ts",
    "src/**/*.tsx",
    "src/**/*.vue",
    "vite.config.ts",
    ".eslintrc.cjs",
    "stylelint.config.cjs"
  ]
}
```

Once you have created this file, you can extend the configuration in your ESLint config file like this:

```js
module.exports = {
  extends: ["@raidorev"],
};
```

## Plugins

This configuration uses the following plugins:

- [typescript-eslint](https://typescript-eslint.io): Provides additional rules specific to TypeScript, as well as the ability to use TypeScript's type checking APIs.
- [eslint-plugin-vue](https://eslint.vuejs.org): Supports linting for Vue.js code.
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier) with [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): Prettier integration.
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): Rules for import/export usage. My favorite rule is 'import/order', which enforces a consistent order for imports. I use the following order: builtin, external, internal, parent, sibling, index, object, type, unknown. `@/**` alias is marked as internal import.
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise): Provides rules for working with Promises.
- [eslint-plugin-regexp](https://www.npmjs.com/package/eslint-plugin-regexp): Provides rules for working with regular expressions.
- [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs): Provides additional rules for code quality and maintainability, based on the [SonarQube](https://www.sonarsource.com/products/sonarqube/features/code-quality) project.
- [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn): More rules for code quality and maintainability.
