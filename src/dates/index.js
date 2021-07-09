const moment = require("moment")

// import moment here; use this package in each function


const today = () => {
  // write code for dates.today

const today = moment().format('dddd');
return today
}

const calendar = () => {
  // write code for dates.calendar
const calendar = moment().format("MMMM D, YYYY");
return calendar
}

const currentTime = () => {
  // write code for dates.currentTime
const currentTime = moment().format('LTS');
return currentTime
}

module.exports = {
  today,
  calendar,
  currentTime
}