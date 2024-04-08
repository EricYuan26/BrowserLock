//import { correct } from './login.js';
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

const loginCloseAllTabs = ()=>{
/*     let n = logTabs();
    if (n.length == 1) {
        chrome.tabs.create({url: "login.html"});
    } */
    //if you are to not add a detector or smth, you need to maje sure the default tab on startup is set to the ext login page or it will crash.


    let querying = chrome.tabs.query({}, function (tabs) {
        for (let tab of tabs) {
            console.log("[RUNTIME] ID logged for tab " + tab.id + " - " + tab.url);
            if (tab.url !== chrome.runtime.getURL('login.html')) {
                console.log("[RUNTIME] Closed tab " + tab.id + " - " + tab.url);
                chrome.tabs.remove(tab.id);
            }
        }
    }); 
};
const logTabs = ()=>{
    chrome.tabs.query({}, function(tabs) {
        var tabIds = tabs.map(function(tab) {
            return tab.id;
        });
        console.log(tabIds); // This will log an array of tab IDs
        return tabIds;
    });
}
chrome.action.onClicked.addListener(function (thisTab) {
    closeAllTabs();
});
chrome.commands.onCommand.addListener((command) => {
    closeAllTabs();
});
chrome.tabs.onCreated.addListener(function() {
    /* loginCloseAllTabs(); */
    null;
});