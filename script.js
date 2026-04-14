// Extract URL parameters and update page
(function() {
  'use strict';

  // Get all URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Get location parameter (could be 'location', 'airport', or similar)
  const location = urlParams.get('location') || urlParams.get('airport') || '';

  // Update titles if location is provided
  if (location) {
    const headerTitle = document.getElementById('header-title');
    const bannerTitle = document.getElementById('banner-title');

    if (headerTitle) {
      headerTitle.textContent = `${location} Airport Parking`;
    }
    if (bannerTitle) {
      bannerTitle.textContent = `Chop 70% off ${location} Airport Parking`;
    }
  }

  // Update CTA button links to include all URL parameters
  function updateCTALinks() {
    const currentURL = new URL(window.location.href);
    const currentDomain = currentURL.origin;

    // Build target URL: domain/lgp-wizard-flights.html + all current parameters
    const targetURL = `${currentDomain}/lgp-wizard-flights.html${window.location.search}`;

    // Update both CTA buttons
    const ctaTop = document.getElementById('cta-button');
    const ctaBottom = document.getElementById('cta-button-bottom');

    if (ctaTop) ctaTop.href = targetURL;
    if (ctaBottom) ctaBottom.href = targetURL;
  }

  // Run on page load
  updateCTALinks();
})();
