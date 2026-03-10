chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "GET_FIELDS") {
    const inputs = Array.from(document.querySelectorAll('input, textarea, select'));
    const fieldData = inputs.map(i => ({
      id: i.id,
      name: i.name,
      placeholder: i.placeholder,
      label: i.labels?.[0]?.innerText || ""
    }));
    sendResponse(fieldData);
  }

  if (request.action === "FILL_FIELDS") {
    for (const [key, value] of Object.entries(request.data)) {
      const el = document.getElementsByName(key)[0] || document.getElementById(key);
      if (el) {
        el.value = value;
        el.dispatchEvent(new Event('input', { bubbles: true })); // Trigger site's logic
      }
    }
  }
});