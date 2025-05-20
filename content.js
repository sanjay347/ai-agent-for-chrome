// content.js
chrome.runtime.onMessage.addListener((req, sender, sendRes) => {
  if (req.action === "getPageContent") {
    const pageText = document.body.innerText || "";
    sendRes({ text: pageText });
  }
});
