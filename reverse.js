// Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front.

function reverse() {
    const element = document.getElementById('target');
    let textNode = element.childNodes[0];
    let text = textNode.data;
    // console.log(text);

    setInterval(() => {
        text = text[text.length - 1] + text.substring(0, text.length -1);
        textNode = text;
        element.innerHTML = textNode;
    }, 1000)
}