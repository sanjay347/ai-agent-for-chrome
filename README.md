## 📚 AI Web Agent – Chrome Extension

> Summarize and interact with any webpage using Claude AI + Firebase Google Login

---

### 🚀 Features

* ✅ Summarizes the current webpage using Claude (via OpenRouter)
* ✅ Supports Q\&A prompts about page content
* ✅ Google Login via Firebase
* ✅ Clean UI with copy-to-clipboard functionality
* ✅ Secure personal API key input (not hardcoded)

---

### 🛠️ How It Works

1. You visit any webpage
2. Open the extension
3. Login with Google (handled via Firebase)
4. Ask questions like:

   * "Summarize this page"
   * "What are the key points?"
5. Claude AI responds with smart answers

---

### 🔧 Setup Instructions

#### 1. Clone the Repository

```bash
git clone https://github.com/your-username/ai-web-agent.git
cd ai-web-agent
```

#### 2. Add Your OpenRouter API Key

Since we don’t expose the key in code:

* Open the extension in Chrome
* Paste your API key into the input field labeled:

  > "Enter your OpenRouter API Key"
* Click **Save API Key**

Get your key at: [https://openrouter.ai/keys](https://openrouter.ai/keys)

---

### 🧪 Load in Chrome (Development Mode)

1. Go to `chrome://extensions`
2. Turn on **Developer Mode**
3. Click **Load Unpacked**
4. Select the extension folder

---

### 🔐 Firebase Setup (Optional)

Google Login is pre-wired using Firebase Authentication.

If you want to use your own Firebase project:

* Replace the config in `popup.js` with your Firebase project’s config
* Enable **Google Sign-In** in the Firebase Console

---

### 📦 Publishing to Chrome Web Store?

You’ll need to:

* Add icons (`icon.png`, 128×128 & 48×48)
* Include a [Privacy Policy](https://termsfeed.com/blog/privacy-policy-chrome-extension/) link
* Fill out the required privacy declarations

---

### 🙌 Credits

* Claude 3 by Anthropic via [OpenRouter](https://openrouter.ai)
* Firebase Authentication
* Developed by \[Your Name] 👋

---

### 📜 License

MIT License – feel free to fork, improve, and use!

---

Would you like me to:

* Customize this with your GitHub username or name?
* Add a privacy policy markdown file too?

Let me know and I’ll generate those!
