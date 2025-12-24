require("dotenv").config();

console.log("App Name:", process.env.APP_NAME);
console.log("Environment:", process.env.NODE_ENV);

function start() {
  return "App Running...";
}

module.exports = start;