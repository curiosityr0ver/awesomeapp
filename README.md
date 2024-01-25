
# ASSIGNMENT QUESTIONS

This is a basic web app that demonstrates the use of Context API to avoid props drilling and efficient state management.
We are generating a Context called SideContext, which stores the length of three sides of a triangle as well the makes available the functions to modify/update them. \
This context is being used by various components of the app to fetch the side lengths and their respective functions to for further processing.
You have to make sure all three Cypress test cases pass without any errors.
## SETUP
After forking the repository, go to the root directory and then \
npm install
```bash
  npm install
```
```bash
  npm start
```
```bash
  npx cypress open
```

**The zeroth test case** checks whether you've successfully forked the repository and are able to run the react app after installing all the dependencies.
It also checks whether the increment and decrement buttons are working for all three side lengths, and whether the triangle validity check is functioning correctly.\
**The first test case** checks whether the side lengths are correctly being displayed after defined number of increment and decrement operations, and whether you are correctly able to display the triangle perimeter and area.\
**The second test case** checks whether after a set number of increment and decrement operations, you are successfully able to display the three interior angles of the triangle.
### BEST OF LUCK !

