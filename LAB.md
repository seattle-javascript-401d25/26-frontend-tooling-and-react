## Submission Instructions
  * Submit a pull request to this repository
  * Submit a link to your pull request on canvas: 
  * Submit a question: 
  * observation: 
  * how long you spent: 

#### Feature Tasks  
Create the following component
###### Header
* Modularize a `Header` component that contains some header title of your choice and import it into your main `App` component
###### App
* Should contain the entire application's view and state
* Should have a form with two input fields
* The app's state should have two properties that map back to the values of those two inputs fields
* The app's state should have two properties that are arrays which store their respective input field value on form submission
* The app should display the `cowsay` image in a `pre` tag. 
* Write a method called `getIntersection` that finds the common values between your two lists and render that as a comma-separated string that is listed in the cowsay bubble. If there are no common values, the cow's text should remain the defaulted `this.state.message`.
* It is recommend that this method follow this signature:
```
getIntersection(firstList, secondList) => comma-separated string of common values between lists OR the default message
```

####  Documentation  
Write a description of the project in your README.md

#### Stretch Goals
* Add a select menu that enables you to change the type of cowfile currently being used
* Add functionality where clicking a list item deletes that item and updates the state accordingly
* Save your lists and any other relevant state properties to local storage so when you restart your app, that data persists on page reload
* CSS it up! Or more accurately, SCSS it up. [Read SCSS docs](https://sass-lang.com/guide) and make your app look amazing.