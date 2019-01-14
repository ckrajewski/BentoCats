# Bento Coding Challenge By Chris Krajewski

## Contribution

If you like to help and contribute (there's lot root for improvements! I've collected a list of [Improvements and New Features](#improvements) you're more than welcome! 

## Install and run

First clone the repository:

```
https://github.com/ckrajewski/BentoCats
```

Open a terminal and cd into the `BentoCats` folder. Then:

1. `npm install` (installs the node modules and the TypeScript definition files)
2. `npm start` 

Your default browser should automatically open and redirect you to `http://localhost:8080`
It may open the tab before everything is loaded, but that's OK. After waiting for a bit, it should load :)

## Looking at the code

To take a close look at the front end code (React) feel free to use any text editor i.e. Sublime/Atom. Here's not the time to argue which is better :) 

## Feedback
In case you have any comments, questions, bugs, enhancements feel free to open an issue in this repository.

# Improvements
- [ ] Add client-side testing (Jest)
- [ ] Add error handling
- [ ] Add ESLint
- [ ] Add TypeScript
- [ ] Look into PostCSS. Has lots of packages (like adding namespacing to stylized components)
- [ ] Seperate webpack into dev and prod configs
- [ ] Get client feedback on UI. e.g. header colors could be less ugly :/ 

# New Features 
- [ ] Add infinite scrolling support in API Layer as well as in the front-end (in React)
- [ ] Add stenciling to show that resources (like images) are being loaded
- [ ] Find a way to add caching for sorting algorthim (Sorting algorithm currently fires everytime sort is toggled. This is because we want to contine to sort as your scrolls and get more cat pics and fact)