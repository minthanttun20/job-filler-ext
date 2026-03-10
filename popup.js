document.getElementById('fillBtn').addEventListener('click', async () => {
  const status = document.getElementById('status');
  status.innerText = "Scanning form...";

  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const settings = await chrome.storage.local.get(['gemini_key', 'user_resume']);

  if (!settings.gemini_key) {
    status.innerText = "Error: Add API Key in Options!";
    return;
  }

  // 1. Get field info from the page
  chrome.tabs.sendMessage(tab.id, { action: "GET_FIELDS" }, async (fields) => {
    status.innerText = "AI is thinking...";
    
    // 2. Call Gemini
    const prompt = `Based on this resume: "${settings.user_resume}", fill these form fields: ${JSON.stringify(fields)}. Return ONLY valid JSON: {"field_id_or_name": "value"}`;
    
    try {
      const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${settings.gemini_key}`, {
        method: "POST",
        body: JSON.stringify({ contents: [{ parts: [{ text: prompt }] }] })
      });
      const data = await response.json();
      const aiText = data.candidates[0].content.parts[0].text;
      const cleanJson = JSON.parse(aiText.replace(/```json|```/g, ""));

      // 3. Send data back to page to fill
      chrome.tabs.sendMessage(tab.id, { action: "FILL_FIELDS", data: cleanJson });
      status.innerText = "Done!";
    } catch (err) {
      status.innerText = "AI Error. Check console.";
      console.error(err);
    }
  });
});