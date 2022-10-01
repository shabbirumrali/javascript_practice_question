// Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function dateFormate() {
    const now = new Date();
    let date = now.getDate();
    let month = now.getMonth() + 1;
    const year = now.getFullYear();
    
    date = date < 10 ? "0"+date : date;
    month = month < 10 ? "0"+month : month;
    
    console.log(`${date}-${month}-${year}`);
    console.log(`${month}-${date}-${year}`);
    console.log(`${month}/${date}/${year}`);
}


// Write a JavaScript program to find 1st January is being a Sunday between 2014 and 2050.

function checkForSunday() {
    for(let year = 2014; year <= 2050; year++) {
        let d = new Date (year, 0, 1).getDay() === 0;
        if(d) {
            console.log(`${year} is sunday`);
        }
    }
}

// checkForSunday();

// Write a JavaScript program to calculate days left until next Christmas.

const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);

if(today.getMonth() === 11 && today.getDate() > 25) {
    cmas.setFullYear(cmas.getFullYear() + 1);
}
let oneDay = 1000*60*60*24;
const dayLeft = Math.ceil((cmas.getTime() - today.getTime()) / oneDay);

console.log(`${dayLeft} days left for the christmas`);
