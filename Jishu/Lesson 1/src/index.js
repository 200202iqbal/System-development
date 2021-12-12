const chalk = require("chalk");

console.log(chalk.bgRed("Hello Chalk!"));
console.log(chalk.greenBright("Hello YSE"));

const lat = process.argv[2];
const lng = process.argv[3];

const cities = require("cities");

// search City use 
if(lat && lng)
{
    let city = cities.gps_lookup(lat,lng);
    console.log(city);
}
// search ZIP in USA
const zip = process.argv[2];
if(zip)
{
    let zipcode = cities.zip_lookup(zip);
    console.log(zipcode);
}

// search findbyState

const findByState = process.argv[2];
if(findByState)
{
    let state = cities.findByState(findByState);
    console.log(state)
}
