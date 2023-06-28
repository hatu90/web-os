(() => {
  const appId = 'vanila-app';
  window.apps = {
    ...window.apps,
    [appId]: {
      render: ({ elementId }) => {
        const element = document.getElementById(elementId);
        if (element) {
          element.innerHTML = "<h2>Hello from Vanila</h2>";
        }
      }
    }
  }
})();
