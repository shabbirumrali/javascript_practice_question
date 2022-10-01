// Leap Year Program

// Using if else
function leapYear(year) {
    if(year % 4 === 0 && !(year % 100 === 0) || year % 400 === 0) {
        console.log('yes, It is a leap year');
    } else {
        console.log('No, It is not a leap year');
    }
}
// leapYear(2004);


// Using new Date()
function checkLeapYear(year) {
    const leapYear = new Date(year, 1, 29).getDate() === 29;
    if(leapYear) {
        console.log(year, "is a leap year");
    } else {
        console.log(year, "is not a leap year")
    }
}
checkLeapYear(2300);

// Another method
function leapYearLogic(year) {
    const leap = year % 100 === 0 ? (year % 400 === 0) : year % 4 === 0
    console.log(leap);
}
leapYearLogic(292);

// 