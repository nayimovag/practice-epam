let date = new Date();
let month = Number(date.getMonth())+1//because getMonth starts with 0 not 1. 0-11 accordingly with months
console.log("Today's day is " + date.getDate())
console.log("Today's month is " + month)
console.log("Today's year is " + date.getFullYear())