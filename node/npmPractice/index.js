const request = require('request')

request('http://jsonplaceholder.typicode.com/users', function (err,res,body) {
  // console.err(err);
  console.log(err);
  console.log(body);  
  console.log(res.statusCode);  
})