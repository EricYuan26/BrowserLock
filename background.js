const closeAllTabs = ()=>{
    chrome.tabs.create({url: "login.html"}, function (preset) {
        let querying = chrome.tabs.query({}, function (tabs) {
            for (let tab of tabs) {
                console.log(tab.id + " - " + tab.url);
                /* if (tab.url !== url("https://google.com")) {
                    chrome.tabs.remove(tab.id);
                } */
                /* if ((tab.id !== preset.id) && (tab.url !== preset.url)) {
                    chrome.tabs.remove(tab.id);
                } */
                if (tab.url !== preset.url) {
                    chrome.tabs.remove(tab.id);
                }
            }
        }); 
    });
}

// toolbar button event listener
chrome.action.onClicked.addListener(function (thisTab) {
    /* if (correct==0) {
        closeAllTabs();
    } */
    closeAllTabs();
});

// it will listen key board shortcut
chrome.commands.onCommand.addListener((command) => {
    /* if (correct==0) {
        closeAllTabs();
    } */
    closeAllTabs();
});
/* chrome.tabs.onCreated.addListener(function(tab) {
    closeAllTabs();
}); //I AM SUCH A FUCKING IDIOT */