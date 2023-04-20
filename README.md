# jsdoc-plugin-just-comments

A super simple [JSDoc](https://jsdoc.app/) plugin that makes [JSDoc](https://jsdoc.app/) ignore all code in your source files and rely solely on your comments. Intended for use with `.ts` typescript files.

## Install

`npm install --save-dev jsdoc-plugin-just-comments`

## Example

```json
// config.json
{
    "source": {
        "include": "./src/",
        "includePattern": "\\.(js|jsx|jsdoc|ts|tsx|tsdoc)$"
    },
    "plugins": [
        "jsdoc-plugin-just-comments"
    ]
}
```