var colors = {
    'green': '#B3FFB6',
    'yellow': '#FFFBB3',
    'purple': '#E2B3FF',
    'red': '#FFB3B6',
    'white': '#FFF'
}

for (var color in colors) {
    browser.contextMenus.create({
        id: color,
        title: "",
        icons: {
            16: `icons/${color}.svg`,
        }
    })
}

browser.contextMenus.onClicked.addListener((info, tab) => {
    var color = info.menuItemId
    if (color in colors) {
        browser.tabs.query({
            active: true,
            currentWindow: true
        }).then((tabs) => browser.tabs.sendMessage(tabs[0].id, colors[color]))
    }
})

