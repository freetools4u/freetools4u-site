(function () {
  // Hijri month names
  const hijriMonths = [
    "Muharram", "Safar", "Rabiʿ al-awwal", "Rabiʿ al-thani",
    "Jumada al-awwal", "Jumada al-thani", "Rajab", "Shaʿban",
    "Ramadan", "Shawwal", "Dhu al-Qaʿdah", "Dhu al-Ḥijjah"
  ];

  // Load Hijri date from Aladhan API
  function fetchHijriDate() {
    const today = new Date();
    const dateStr = `${today.getDate()}-${today.getMonth() + 1}-${today.getFullYear()}`;

    fetch(`https://api.aladhan.com/v1/gToH?date=${dateStr}`)
      .then(response => response.json())
      .then(data => {
        const hijri = data.data.hijri;
        const gregorian = data.data.gregorian;

        const hijriDate = `${hijri.weekday.en}, ${hijri.day} ${hijri.month.en} ${hijri.year} AH`;
        const gregDate = `${gregorian.date}`;

        renderWidget(hijriDate, gregDate);
      })
      .catch(() => {
        renderWidget("Hijri Date Unavailable", "");
      });
  }

  function renderWidget(hijri, gregorian) {
    const el = document.getElementById("hijri-widget");
    if (!el) return;

    el.innerHTML = `
      <div style="font-family: sans-serif; text-align: center; border: 1px solid #e2e8f0; padding: 1em; border-radius: 10px; max-width: 300px; margin: auto; background: #f9fafb;">
        <div style="font-size: 1rem; font-weight: 600; margin-bottom: 0.5em;">📅 ${hijri}</div>
        <div style="font-size: 0.9rem; color: #555;">📆 ${gregorian}</div>
        <div style="font-size: 0.75rem; margin-top: 0.8em; color: #888;">
          🔗 <a href="https://freetools4u.site/widgets/hijri-date.html" target="_blank" rel="noopener" style="color: #4f46e5; text-decoration: none;">Powered by FreeTools4U.site</a>
        </div>
      </div>
    `;
  }

  fetchHijriDate();
})();
