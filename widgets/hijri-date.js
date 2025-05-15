(function(){
  // Create container if not exists
  const containerId = 'hijri-widget';
  let container = document.getElementById(containerId);
  if (!container) {
    container = document.createElement('div');
    container.id = containerId;
    document.body.appendChild(container);
  }

  // Inject widget styles
  const styleId = 'hijri-widget-style';
  if (!document.getElementById(styleId)) {
    const style = document.createElement('style');
    style.id = styleId;
    style.textContent = `
      #${containerId} {
        background: #ffffff;
        border-radius: 14px;
        padding: 1.3rem 2rem;
        box-shadow: 0 3px 12px rgba(16, 185, 129, 0.3);
        max-width: 320px;
        width: 100%;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        color: #1f2937;
        text-align: center;
        font-size: 1.1rem;
        line-height: 1.4;
        user-select: none;
      }
      #${containerId} .date-line {
        margin: 0.4rem 0;
      }
      #${containerId} .backlink {
        margin-top: 0.8rem;
        font-size: 0.8rem;
      }
      #${containerId} .backlink a {
        color: #10b981;
        text-decoration: none;
        font-weight: 600;
      }
      #${containerId} .backlink a:hover {
        text-decoration: underline;
      }
    `;
    document.head.appendChild(style);
  }

  // Build widget HTML
  container.innerHTML = `
    <div class="date-line" id="greg-date">Loading Gregorian date...</div>
    <div class="date-line" id="hijri-date">Loading Hijri date...</div>
    <div class="backlink">Powered by <a href="https://freetools4u.site" target="_blank" rel="noopener noreferrer">FreeTools4U.site</a></div>
  `;

  // Date update function
  function updateDates() {
    const greg = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    container.querySelector('#greg-date').textContent = 'Gregorian: ' + greg.toLocaleDateString(undefined, options);

    try {
      const hijriFormatter = new Intl.DateTimeFormat('en-TN-u-ca-islamic', options);
      const hijriDate = hijriFormatter.format(greg);
      container.querySelector('#hijri-date').textContent = 'Hijri: ' + hijriDate;
    } catch {
      container.querySelector('#hijri-date').textContent = 'Hijri date not supported in this browser.';
    }
  }

  updateDates();
})();
