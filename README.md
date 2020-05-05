This is the JavaScript component for [Jim](https://github.com/ursi/jim)

Install: `npm install @ursi/jim`

# Use

```javascript
// import
const jim = require(`@ursi/jim`);

// attach a function to a Jim task
// this requires a string and a function that returns a promise
jim.regTask(`my task`, myTask);

// attack a function to a Jim function
jim.regFunction(`my function`, myFunction);
```
