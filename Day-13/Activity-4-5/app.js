// Activty 4: Using third-part modules
// Task 6: Install a third-party module (e.g., lodash) using npm. Import and use a function from this module in a script.
const lodash = require('lodash');
let arr = [0,2];
arr = lodash.concat(arr, 4, 6, 8);
console.log(arr);
// Task 7: Install a third-party module (e.g., axios) using npm. Import and use to make a module request in a script.
const axios = require('axios');

axios.get('https://catfact.ninja/fact')
  .then(res => {
    console.log(res.data.fact);
  })
  .catch(error => {
    console.log(error.message);  

  });

// Activity 5: Module Bundling (optional)
// Task 8: Use a module bundler like Webpeck or Parcel to bundel multiple JavaScript files into a single file. Write a script to demonstrates the bundling process.