# Code Kata Introduction
This kata is meant to allow you to prove your skill sets using ReactJs and the Redux flow. Please read this document before coming in to take the kata. You are responsible to being able to start a project from scratch. We do not want you to start the kata cold, we are providing you with all the information you will need to successfully complete the kata ahead of time.

## Overview
You will make a GET request on an API, have an option on how you wish to use the data, and display it in a Material-UI table. It is highly suggested you spend time before the kata working through this basic flow. Only 4 hours will be available for the kata, so learning while you perform is not really the best idea out there.

## Expectations
### Computer
You are expected to supply your own development environment. This means bring a laptop ready to code.
### Evaluation
The following is the list of categories that we will use to determine our selection of candidates:

*	Able to demonstrate React/Redux flow
*	Able to communicate with the API via Axios
*	Able to use Material-UI (beta version)
*	Able to effectively manipulate data structures returned from API into ones usable for rendering views
* 	Able to demonstrate adequate code coverage in unit and integration testing
 
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

Please note that using `create-react-app` does not provide `redux`, `axios`, nor `material-ui`, you will need to be able to install these libraries as well as any other ancillary libraries.

### Ancillary Libraries
You are free to use any combination of other supportive libraries you wish. 

## Preparing Suggestions
If I was preparing for this kata, and understanding the redux flow, I would provide a mock for axios that supplied a list of data. Because axios expects json, you should also expect our api that you will access to provide json. Since we will be populating a table, you should also fully expect a list of javascript objects/hashes. An example may look like:

```javascript
[{
    id: 1,
    name: 'Anthony',
    favoriteFood: 'Burritos'
},{
    id: 2,
    name: 'Jeremy',
    favoriteFood: 'Enchiladas'
},{
    id: 3,
    name: 'Stephen',
    favoriteFood: 'Prime Rib'
},{
    id: 4,
    name: 'Mike',
    favoriteFood: 'Roast Beef, Potatoes, Cooked Carrots'
},{
    id: 5,
    name: 'Andrew',
    favoriteFood: 'Burritos'
}, {
    id: 6,
    name: 'Brad',
    favoriteFood: 'Prime Rib'
}]
```

Once I have the data mocked out, I would then do my Test Driven Development (TDD) to build out the actions. Completing that, I would then TDD out my reducers. Finally, I would then create my presentational component using `withStyles` HOC pattern that `material-ui` suggests. 

Finally, I would then use Redux's `connect` to create my container component and bring it into `<App />`

## Tips for success
Realize the Redux flow (`action` -> `reducer` -> `view`) is meant to provide highly predictable code during the SDLC. Be sure to follow best practices. Also be sure to understand the point of each item in the flow. 

### Action
Actions should provide actions and actions only, be them synchronous or asynchronous.

### Reducer
The reducers _reduce_ data. Make sure to know how to effectively manipulate data with es2015. I think it is pretty obvious that the data will be a list. Make sure to understand how to use the es2015 built-in functions on lists.

### View
The view presents the data. Make sure to know when to use stateless and stateful presentational views and how to use container components as detailed in the Redux best practices.

### Style
Style counts. Make sure you mini-app is clean. Please realize, style doesn't only mean what I see on the screen but how your code is submitted as well.

### Tests
In a professional setting you will have to write tests for your code. With all tests, there are diminishing returns. When the kata is release, I will detail the expected tests. I will not expect you to have to install any extra libraries for testing past what `create-react-app` includes bundled into the starter. You may however, add any library you are comfortable with and update the `package.json` as long as I can run `rpm run test` and see it test green.



```