const COLORS = [
    '#B3FFB6',
    '#FFFBB3',
    '#E2B3FF',
    '#FFB3B6',
]

const highlight = (color) => {
    var range = window.getSelection().getRangeAt(0);
    var selection = range.extractContents();

    var span = document.createElement('span');
    span.style.backgroundColor = color;
    span.appendChild(selection);

    range.insertNode(span);
}

const random = (max) => Math.floor(Math.random() * Math.floor(max))

browser.runtime.onMessage.addListener((color) => highlight(color))
window.addEventListener('keyup', (key) => {
    if (key.ctrlKey && key.keyCode == 65) {
        highlight(COLORS[random(COLORS.length)])
    }
})