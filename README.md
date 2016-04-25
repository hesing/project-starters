# Angular 2 bootstrap starter

## Setup

```
npm install -g ts-node
gem install scss_lint ( required for sass lint to work )
npm i
```
## How to start

```][poi]
npm start ( dev with watch )
npm run build.dev ( dev build )
npm run build.prod ( production build )
node server.js ( run prod build )
```


**Note** that this seed project requires node v4.x.x or higher and npm 2.14.7.

# Running tests

```bash
npm test

# Debug - In two different shell windows
npm run build.test.watch      # 1st window
npm run karma.start           # 2nd window

# code coverage (istanbul)
# auto-generated at the end of `npm test`
# view coverage report:
npm run serve.coverage

# e2e (aka. end-to-end, integration) - In three different shell windows
# Make sure you don't have a global instance of Protractor

# npm run webdriver-update <- You will need to run this the first time
npm run webdriver-start
npm run serve.e2e
npm run e2e

# e2e live mode - Protractor interactive mode
# Instead of last command above, you can use:
npm run e2e.live
```
You can learn more about [Protractor Interactive Mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

# Contributing

Please see the [CONTRIBUTING](https://github.com/mgechev/angular2-seed/blob/master/.github/CONTRIBUTING.md) file for guidelines.

# Directory Structure

```
D:.
├───coverage
├───dist
│   ├───dev
│   ├───prod
│   └───tmp
├───src
│   ├───assets
│   ├───components
│   │   ├───about
│   │   ├───app
│   │   ├───home
│   │   ├───names
│   │   ├───navbar
│   │   └───shared
│   │       └───services
│   ├───fonts
│   ├───images
│   └───scss
│       ├───bootstrap-sass-3.3.6
│       ├───components
│       └───theme
├───tools
└───typings
```