console.log("Chrome extension go?");



chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) 
{
    console.log(message.txt);
    if (message.txt === "hello") {
        let elt = document.querySelector("#container > h1 > yt-formatted-string");
        elt.style['background-color'] = '#FF00FF';
        // for (elt of paragraphs) {
        // elt.style['background-color'] = '#FF00FF';
        // }
    }
}