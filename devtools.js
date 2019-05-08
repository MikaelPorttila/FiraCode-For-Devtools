fetch('style.css')
    .then(res => res.text())
    .then(chrome.devtools.panels.applyStyleSheet);