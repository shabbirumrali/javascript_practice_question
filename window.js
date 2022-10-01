// Print the current Window content

function printContent() {
    window.print();
}

// Write a JavaScript program to get the website URL (loading page)
function getUrl() {
    document.querySelector('#url').innerHTML = document.URL;
}

// Write a JavaScript exercise to create a variable using a user-defined name.
const name = 's';
const n = 'shabbir';
this[name] = n;
// console.log(this[name]);

function getExtention(fileName) {
    return fileName.split('.').pop();
}
const ext = getExtention('abc.php')
console.log(ext);

