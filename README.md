
<!-- # FilmFlix Code Test for MaginePro-->

### Table of contents
* [FYI](#install)
* [Install](#install)
* [Usage](#usage)
* [License](#license)
## FYI

I decided to use a small React, React-Router boilerplate because to get focus on the components and app design.

In this app you can see that techs used React, MobX, React-Router, MobX-Router, Cypress and Webpack. I've do my best with the few time that i have to this type of code test even i'll try to do some crypress test but i got an error that i can't debug (i can show you) although you can see with the cypress cli.


### Install

#### Clone this repo

#### Install dependencies

```
yarn
```
or
```
npm install
```

### Usage

#### Start project on local server (go to localhost:1337)

```
yarn start
```
or
```
npm start
```

#### Build project (in "dist" folder):

```
yarn run build
```
or
```
npm run build
```

#### Preview minified production-ready bundle (go to localhost:3000)

```
yarn run preview
```
or
```
npm run preview
```

#### Run Test with Cypress

```
yarn run test:cypress
-&& @ other terminal-
yarn run test:server
```
or
```
npm run test:cypress
-&& @ other terminal-
npm  run test:server
```


#### Async component loading

Components are now loaded async with react-router-loader and the store is injected via MobX Provider.

### License

MIT © [Mario Buendia]
