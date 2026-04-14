// Extract URL parameters and update page
(function() {
  'use strict';

  // Airport code to name mapping
  const AIRPORT_NAMES = {
    LHR: 'Heathrow',
    LGW: 'Gatwick',
    MAN: 'Manchester',
    STN: 'Stansted',
    LTN: 'Luton',
    BHX: 'Birmingham',
    EDI: 'Edinburgh',
    BRS: 'Bristol',
    NCL: 'Newcastle',
    LBA: 'Leeds Bradford',
    EMA: 'East Midlands',
    LPL: 'Liverpool',
    GLA: 'Glasgow',
    EXT: 'Exeter',
    LCY: 'London City',
    SEN: 'Southend',
    ABZ: 'Aberdeen',
    CWL: 'Cardiff'
  };

  // Get all URL parameters
  const urlParams = new URLSearchParams(window.location.search);

  // Get location parameter (could be 'location', 'airport', or similar)
  const locationCode = urlParams.get('location') || urlParams.get('airport') || '';

  // Update titles if location is provided
  if (locationCode) {
    const headerTitle = document.getElementById('header-title');
    const bannerTitle = document.getElementById('banner-title');

    // Convert airport code to full name (or use as-is if not found)
    const locationName = AIRPORT_NAMES[locationCode.toUpperCase()] || locationCode;

    if (headerTitle) {
      headerTitle.textContent = `${locationName} Airport Parking`;
    }
    if (bannerTitle) {
      bannerTitle.textContent = `Chop 70% off ${locationName} Airport Parking`;
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
