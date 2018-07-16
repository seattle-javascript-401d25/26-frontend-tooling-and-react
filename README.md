![cf](https://i.imgur.com/7v5ASc8.png)    
# Lab 26: Frontend Tooling and React with Cowsay Browser 

This lab introduces the React library.

The app takes two text inputs and adds them to two lists.  It adds any words that occur in both lists to a comma-separated string that is used as "the cow's" speach bubble text.

I took a different approach for finding the intersection of the two lists. Rather than defining a separate function, I added a "map" property to the state object and simply tested for intersecting values in the handleFormSubmit method.

