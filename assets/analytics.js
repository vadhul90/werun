// Google Analytics 4 loader, included on every page.
// Set GA_ID to the property's Measurement ID (looks like G-XXXXXXXXXX) to turn
// tracking on. While it is empty this file does nothing.
(function () {
  var GA_ID = '';
  if (!GA_ID) return;
  // Only count real visits, not local previews.
  if (!/(^|\.)werunconsulting\.com$/.test(location.hostname)) return;
  var s = document.createElement('script');
  s.async = true;
  s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
  document.head.appendChild(s);
  window.dataLayer = window.dataLayer || [];
  window.gtag = function () { dataLayer.push(arguments); };
  gtag('js', new Date());
  gtag('config', GA_ID);
})();
