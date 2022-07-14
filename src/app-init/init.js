function initialize() {
  const body = document['body'];
  const scripts = body.getElementsByTagName('script');

  for (let i = (scripts.length -1); i >= 0; i--) {
    const script = scripts[i];
    body.removeChild(script);
  }

  appendScript(body, 'ea/polyfills.js');
  appendScript(body, 'ea/main.js');
  appendScript(body, 'ea/runtime.js');

  function appendScript(body, scriptSource) {
    const scriptTag = document.createElement('script');
    scriptTag.src = scriptSource;
    scriptTag.type = 'module';
    body.appendChild(scriptTag);
    return scriptTag;
  }
}
