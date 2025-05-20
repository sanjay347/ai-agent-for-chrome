document.getElementById("askBtn").addEventListener("click", () => {
  const query = document.getElementById("userInput").value.trim();
  const responseBox = document.getElementById("response");
  const responseContainer = document.getElementById("responseContainer");

  if (!query) return alert("Please enter a question.");

  // Reset UI
  responseBox.innerText = " Thinking...";
  responseContainer.style.display = "block";

  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    chrome.tabs.sendMessage(tabs[0].id, { action: "getPageContent" }, async (res) => {
      if (chrome.runtime.lastError) {
        responseBox.innerText = "Error: Try reloading the webpage";
        return;
      }

      const pageText = res?.text || "";
      const prompt = `${query}\n\nPage Content:\n${pageText.slice(0, 2000)}`;
      const aiReply = await fetchAIResponse(prompt);
      responseBox.innerText = aiReply;
    });
  });
});


async function fetchAIResponse(userMessage) {
  const API_KEY = "#USE YOUR OPENROUTER API KEY HERE"; // Replace this

  const body = {
    model: "anthropic/claude-3-haiku", // or try claude-3-opus or sonnet
    messages: [
      {
        role: "user",
        content: userMessage
      }
    ]
  };

  try {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${API_KEY}`,
        "Content-Type": "application/json",
        "HTTP-Referer": "https://yourdomain.com", // can be anything
        "X-Title": "AI Web Agent Extension"
      },
      body: JSON.stringify(body)
    });

    const json = await res.json();
    return json.choices?.[0]?.message?.content || "No response.";
  } catch (err) {
    return "Failed to connect to Claude.";
  }
}

document.getElementById("copyBtn").addEventListener("click", () => {
  const text = document.getElementById("response").innerText;
  navigator.clipboard.writeText(text).then(() => {
    const copied = document.getElementById("copiedMessage");
    copied.innerText = "Copied!";
    setTimeout(() => (copied.innerText = ""), 2000);
  });
});