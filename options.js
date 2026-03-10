document.getElementById('saveBtn').addEventListener('click', () => {
  const key = document.getElementById('apiKey').value;
  const resume = document.getElementById('resume').value;
  chrome.storage.local.set({ gemini_key: key, user_resume: resume }, () => {
    const toast = document.getElementById('toast');
    if (toast) {
      toast.classList.add('show');
      clearTimeout(window._optionsToastTimeout);
      window._optionsToastTimeout = setTimeout(() => {
        toast.classList.remove('show');
      }, 2200);
    }
  });
});

// Load existing values
chrome.storage.local.get(['gemini_key', 'user_resume'], (res) => {
  if (res.gemini_key) document.getElementById('apiKey').value = res.gemini_key;
  if (res.user_resume) document.getElementById('resume').value = res.user_resume;
});