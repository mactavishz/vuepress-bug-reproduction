# Vuepress Bug Reproduction

This is a minimal set of the dependencies to reproduce this bug

I believe it's caused by the babel configuration file in the root dir

Remove the configuration file, no error appears

## Development

### install dependencies

``` sh
yarn

# or

npm install
```

### Run vuepress serve

``` sh
npm run doc

# or

yarn doc
```