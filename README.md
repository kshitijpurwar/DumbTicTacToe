# Dumb Tic Tac Toe

[Intro to React with Tic-Tac-Toe](https://www.youtube.com/watch?v=pTHCwUdGFkc)

[An article about NPM scripts - 101](https://css-tricks.com/why-npm-scripts/)

NPM scripts are basically an alternative to gulp or grunt, similar to aliases for long CLI commands.

### How it works

- `state` Stores the current state of board in an array in JS
- `checkWin` Checks whether either player has won the game or not, returns `true` or `false`
- `resetGame` Resets the state of the game, virtually and in the DOM
- `BotTurn` It is the basic AI I am using, it is __Dumb__, it is just random

### What are we using
- [live server](https://github.com/tapio/live-server)
- [Watchify](https://github.com/substack/watchify)
- [Babelify](https://github.com/babel/babelify)
- [Npm scripts](https://docs.npmjs.com/misc/scripts)
- [Pug-cli](https://www.npmjs.com/package/pug)
- Sass
