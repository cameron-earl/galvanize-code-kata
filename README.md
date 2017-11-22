# Code Kata Introduction
This kata is meant to allow you to prove your skill sets using ReactJs and the Redux flow. Please read this document before coming in to take the kata. You are responsible to being able to start a project from scratch. We do not want you to start the kata cold, we are providing you with all the information you will need to successfully complete the kata ahead of time.

## Overview
You will make a GET request on an API, have an option on how you wish to use the data, and display it in a Material-UI table. It is highly suggested you spend time before the kata working through this basic flow. Only 4 hours will be available for the kata, so learning while you perform is not really the best idea out there.

## Before you come in to do the kata
Make sure you can execute the following commands

```javascript
create-react-app code-kata
cd code-kata
npm i
npm start
```

If you need to install this global npm, please refer to [Facebook's Github](https://github.com/facebookincubator/create-react-app) page.

If you have not installed npm, please refer to [npmjs.org](https://nodejs.org/en/)

You are free to use [yarn](https://yarnpkg.com/lang/en/docs/install/) if you feel more comfortable with this package manager over npm.

## Code Kata Main Libraries
We will use ReactJs with the Redux flow. We will also use axios to handle all api requests. Finally, our view styles will be handled by Material-UI beta. 

If you need to review any of these, here are their links. For the kata, you are more than welcome to use these as reference while coding as well.

* [ReactJs](https://reactjs.org/)
* [Redux](https://redux.js.org/)
* [Axios](https://www.npmjs.com/package/axios)
* [Material-UI Beta](https://material-ui-next.com/)
	* [Table Component](https://material-ui-next.com/demos/tables/)

Please note that using `create-react-app` does not provide `redux`, `axios`, nor `material-ui`, you will need to be able to install these libraries as well as any other ancillary libraries you wish.

### Ancillary Libraries
You are free to use any combination of other supportive libraries you wish. 

## Preparing Suggestions
If I was preparing for this kata, and understanding the redux flow, I would provide a mock for axios that supplied a list of data. Because axios expects json, you should also expect our api that you will access to provide json. Since we will be populating a table, you should also fully expect a list of javascript objects/hashes.

Once I have the data mocked out, I would then do my Test Driven Development (TDD) to build out the actions. Completing that, I would then TDD out my reducers. Finally, I would then create my presentational component using `withStyles` HOC pattern that `material-ui` suggests. 

Finally, I would then use Redux's `connect` to create my container component and bring it into `<App />`