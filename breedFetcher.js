//add request to require
const request = require("request");
//get value from cammandline
const arg = process.argv.slice(2);
//https://api.thecatapi.com/v1/breeds/search?q=sib
console.log(arg);
//make request
request({
  url: `https://api.thecatapi.com/v1/breeds/search?q=${arg[0]}`,
  method: "GET",
},
function(error, response, body) {
  // error handling
  if (error) {
    console.log("Error:",error);
  }
  //get data from the body
  const data = JSON.parse(body);
  //check comand line arg not valid
  if (data.length < 1) {
    console.log("The requested breed is not found");
  } else {
    //print description
    console.log(data[0].description);
  }
});