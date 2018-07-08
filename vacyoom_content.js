// jshint esversion: 6

console.log("vacyoom: content script loaded");

document.addEventListener("DOMContentLoaded", function(_) {
    var closeDelay = 5000;
    console.log("vacyoom: got DOMContentLoaded; waiting", closeDelay, "ms");
    window.setTimeout(function() {
        browser.runtime.sendMessage("close me!");
        console.log("vacyoom: sent close message");
    }, closeDelay);
});


// // Proof of concept: extract the URL for every open tab without the "tabs" permission, with the 
// // cooperation of an <all_urls> content script.
// browser.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
//     console.log("vacyoom: got message: ", msg);
//     switch (msg) {
//         case "query_url":
//             sendResponse(location.href);
//     }
// });

