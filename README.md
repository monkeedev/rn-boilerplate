# rn-boilerplate

## Description

TypeScript based custom React Native project boilerplate with a folder structure, default components, Axios, Redux Toolkit, React Navigation and Reanimated

## Installation

For now, it installs like this:

1. `git clone` this repository
2. rename cloned repo to `YourProjectName` and change `git origin` to your own repository
3. change ALL `RNBoilerplate` occurencies in the code to `YourProjectName`
4. *(for iOS developers)* reinstall all pods with `npx pod-install ios`

TODO: Will try to change this flow to more comfortable soon

## Folder structure

All folders placed in `src` and related to specified needs:

- `api` - project apis
- `assets` - all images, vectors, fonts, etc.
- `components` - all project components
- `hooks` - project hooks
- `navigation` - navigators placed here
- `redux` - RTK folder
- `screns` - project screens
- `theme` - colors, font sizes, etc.
- `utils` - constants, functions, types, etc.
