// jshint esversion: 6

console.log("vacyoom: background script loaded");

browser.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
    console.log("vacyoom: got message:", msg, "; sender:", sender);
    if (msg === "close me!") {
        console.log("vacyoom: closing tab", sender.tab.id, "with url", sender.url);
        browser.tabs.remove(sender.tab.id);
    }
});
console.log("vacyoom: listening for message");

// // Proof of concept: extract the URL for every open tab without the "tabs" permission, with the 
// // cooperation of an <all_urls> content script.
// browser.tabs.query({}).then(function(tabs) {
//     for (var tab of tabs) {
//         let tabID = tab.id;
//         browser.tabs.sendMessage(tabID, "query_url").then(function(url) {
//             console.log("tab ID ", tabID, ": ", url);
//         });
//     }
// });
