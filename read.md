# 🚀 AI Job Form Filler (Gemini Powered)

An intelligent Chrome Extension designed to eliminate "form fatigue" by automatically filling out job applications using the Gemini 2.5 Flash API. This tool reads the structure of a webpage and maps user resume data to the correct input fields, including checkboxes, radio buttons, and dropdowns.

## ✨ Features

* **AI-Powered Mapping:** Uses Gemini 2.5 Flash to intelligently match resume details to complex form fields.
* **Secure API Handling:** Features a dedicated Options page to store API keys and personal data locally in `chrome.storage`, ensuring sensitive info is never hard-coded or pushed to GitHub.
* **Smart Selection:** Handles not just text inputs, but also radio buttons (Gender, Veteran status) and dropdown selections.
* **Shadow DOM Support:** Designed to find fields even in complex modern web layouts.

## 🛠️ Installation

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/your-username/ai-job-filler.git](https://github.com/your-username/ai-job-filler.git)
    ```
2.  **Load in Chrome:**
    * Open `chrome://extensions/` in your browser.
    * Enable **Developer Mode** (top right toggle).
    * Click **Load Unpacked** and select the project folder.
3.  **Setup API Key:**
    * Right-click the extension icon and select **Options**.
    * Paste your [Google AI Studio API Key](https://aistudio.google.com/).
    * Paste your resume/bio text into the data box and click **Save**.

## 🚀 How to Use

1.  Navigate to any job application site (Greenhouse, Lever, Workday, etc.).
2.  Click the **AI Job Filler** extension icon in your toolbar.
3.  Click **"Fill Form with AI"**.
4.  Watch as the AI analyzes the form and populates your information!

## 🔒 Security & Privacy

* **Zero-Hardcoding:** This project follows security best practices by utilizing an Options UI. Your API key is stored in your browser's local storage and is never uploaded to the repository.
* **Privacy:** Data is only sent to the Gemini API when you explicitly click the "Fill" button.

## 🛠️ Built With

* **JavaScript (ES6+)** - Extension logic and DOM manipulation.
* **Chrome Extension API (Manifest V3)** - Modern extension architecture.
* **Gemini 2.5 Flash API** - The "brain" behind the form field analysis.
* **CSS3** - For a clean, minimal user interface.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.