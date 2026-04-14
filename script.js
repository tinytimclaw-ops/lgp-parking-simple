// Extract URL parameters and update page
(function() {
  'use strict';

  // Get all URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Get location parameter (could be 'location', 'airport', or similar)
  const location = urlParams.get('location') || urlParams.get('airport') || '';

  // Update banner title if location is provided
  if (location) {
    const bannerTitle = document.getElementById('banner-title');
    if (bannerTitle) {
      bannerTitle.textContent = `Chop 70% on ${location} Airport Parking`;
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
