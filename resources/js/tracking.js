// tracking.js - cache poisoning test
(function () {
  console.log("tracking.js loaded from:", window.location.host);
  document.body.setAttribute("data-poison-test", window.location.host);
})();
