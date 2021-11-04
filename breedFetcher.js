//add request to require
const request = require("request");
//get value from cammandline
const arg = process.argv.slice(2);
let breedName = arg[0];
//https://api.thecatapi.com/v1/breeds/search?q=sib
console.log(arg);
//make request
const fetchBreedDescription =function(breedName,callback){ request({
  url: `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
  method: "GET",
},
function(error,response,body) {
  // error handling
  if (error) {
    console.log("Error:",error);
    return error;
  } else {
    //get data from the body
    const data = JSON.parse(body);
    //check comand line arg not valid
    if (data.length < 1) {
        return null;
      console.log("The requested breed is not found");
    } else {
      //print description
      return data[0].description;
    }
  }
});
}
module.exports = { fetchBreedDescription };