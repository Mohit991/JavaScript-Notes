// Date objects = Objects that contain values that represent dates and times
//                They can be changed and formatted.

const date = new Date(); // getting current date
console.log(date); // 2024-11-05T14:14:37.521Z

/********* Creating custom dates ************/

/************* Way 1 ******************/
// Date(year, month, day, hour, minute, second, millisecond)
// for months 0 - jan, 1 - feb and so on...
const mydate1 = new Date(2024, 0, 1, 2, 3, 4, 5);
console.log(mydate1); // 2023-12-31T20:33:04.005Z

/************* Way 2 ******************/
const mydate2 = new Date("2024-01-02T12:00:00Z"); // T = time, Z = UTC
console.log(mydate2); // 2024-01-02T12:00:00.000Z

/************* Way 3 ******************/
const myCreatedDate = new Date();
myCreatedDate.setFullYear(2024);
myCreatedDate.setMonth(0); // January is 0
myCreatedDate.setDate(1);
myCreatedDate.setHours(2);
myCreatedDate.setMinutes(20);
myCreatedDate.setSeconds(30);
console.log(myCreatedDate);

/********* working with the date object ************/

const currentDate = new Date(); // 2024-01-02T12:00:00.000Z
const currentYear = currentDate.getFullYear(); // 2024
const currentMonth = currentDate.getMonth(); // 10, 0 - jan, 1 - feb and so on..
const currentDay = currentDate.getDate(); // 5
const currentHour = currentDate.getHours(); // 19, 24-hour format
const currentMinute = currentDate.getMinutes(); // 55
const currentSeconds = currentDate.getSeconds(); // 56
const dayOfWeek = currentDate.getDay(); // 2, 0 - sunday, 1 - monday and so on..

/********* comparing dates ************/

const d1 = new Date("2024-12-31");
const d2 = new Date("2022-12-31");

if (d1 > d2) {
    console.log(`d1 is bigger`); // if is true
}
