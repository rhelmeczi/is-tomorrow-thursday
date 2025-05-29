const btn = document.getElementById('check-btn');
const result = document.getElementById('result');
const loadingContainer = document.getElementById('loading-container');
const loadingBar = document.getElementById('loading-bar');
const thinkingImg = document.getElementById('thinking-img');
const thinkingText = document.getElementById('thinking-text');

btn.addEventListener('click', () => {
    btn.disabled = true;
    btn.style.display = 'none';  // Hide button while thinking

    result.textContent = '';
    loadingContainer.style.display = 'block';
    loadingBar.style.width = '0%';
    thinkingImg.style.display = 'block';
    thinkingImg.classList.add('pulsing');

    thinkingText.classList.add('pulsing');
    thinkingText.style.display = 'block';

    let elapsed = 0;
    const duration = 10_000; // 10 seconds
    const intervalMs = 100;  // update every 100ms

    const intervalId = setInterval(() => {
        elapsed += intervalMs;
        let progress = Math.min((elapsed / duration) * 100, 100);
        loadingBar.style.width = progress + '%';

        if (elapsed >= duration) {
            clearInterval(intervalId);
            loadingContainer.style.display = 'none';
            thinkingImg.style.display = 'none';
            thinkingImg.classList.remove('pulsing');

            thinkingText.style.display = 'none';
            thinkingText.classList.remove('pulsing');

            const today = new Date();
            const tomorrow = new Date(today);
            tomorrow.setDate(today.getDate() + 1);

            if (tomorrow.getDay() === 4) {
                result.textContent = "Yes, tomorrow is Thursday!";
            } else {
                result.textContent = "No, tomorrow is not Thursday.";
            }

            btn.style.display = 'inline-block';  // Show button again
            btn.disabled = false;
        }
    }, intervalMs);
});
