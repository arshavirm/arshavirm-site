(function () {
    // Live menu-bar clock, styled like the classic Mac OS menu bar clock.
    const clockEl = document.getElementById('menu-clock');
    function updateClock() {
        if (!clockEl) return;
        const now = new Date();
        let h = now.getHours();
        const m = now.getMinutes().toString().padStart(2, '0');
        const ampm = h >= 12 ? 'PM' : 'AM';
        h = h % 12;
        if (h === 0) h = 12;
        clockEl.textContent = h + ':' + m + ' ' + ampm;
    }
    updateClock();
    setInterval(updateClock, 1000 * 15);

    // Playful "uptime" counter on the homepage status bar, counted from page load
    // like an old machine that's been left running.
    const uptimeEl = document.getElementById('uptime');
    if (uptimeEl) {
        const start = Date.now();
        function updateUptime() {
            const secs = Math.floor((Date.now() - start) / 1000);
            const m = Math.floor(secs / 60).toString().padStart(2, '0');
            const s = (secs % 60).toString().padStart(2, '0');
            uptimeEl.textContent = 'uptime: ' + m + ':' + s;
        }
        updateUptime();
        setInterval(updateUptime, 1000);
    }
})();

console.log(
    '%c Arshavir Mirzakhani ',
    'background: #000; color: #fff; font-size: 18px; font-weight: bold; padding: 8px;');
console.log('%c Welcome to Macintosh. ', 'color: #000; font-size: 13px;');
console.log('%c \u2318 https://github.com/arshavirm', 'color: #4d4d4d; font-size: 12px;');
