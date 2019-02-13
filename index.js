 browser.runtime.onMessage.addListener((color) => {
     console.log("Got message", color)
    var range = window.getSelection().getRangeAt(0);
    var selection = range.extractContents();

    var span = document.createElement("span");
    span.style.backgroundColor = color;
    span.appendChild(selection);

    range.insertNode(span);
})