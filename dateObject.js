// Display date and time
// Output
// Today is : Tuesday
// Current time is : 10 PM : 30 : 38


function displayTime() {
    const now = new Date();
    const day = now.getDay();
    const dayList = ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday'];
    var hour = now.getHours();
    const min = now.getMinutes();
    const sec = now.getSeconds();

    var prepand = hour >= 12 ? 'PM' : 'AM';
    hour = (hour>12) ? (hour-12) : hour;

    console.log("Today is : ", dayList[day], '.');

    console.log(`Current time is : ${hour}${prepand}:${min}:${sec}`);
};

displayTime();