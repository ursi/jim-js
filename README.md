This is the JavaScript component for [Jim](https://github.com/ursi/jim)

Install: `npm install @ursi/jim`

# Use

```javascript
// import
const jim = require(`@ursi/jim`);

/*
Attach a function to a Jim task
- The first value is a string used to identity the function in Jim.
- The second value is a function whose return value will be decoded in Jim.
  if the return value is a promise, the task will complete when it settles.
*/
jim.task(`my task`, myTask);

/*
Attach a function to a Jim fuction
- The first value is a string used to identity the function in Jim.
- The second value is a syncronous function whose return value will be decoded in Jim.
*/
Jim.function(`my function`, myFunction);
```
