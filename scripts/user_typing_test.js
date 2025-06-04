// typing-test.js
function submitTest() {
  const text = document.getElementById('test-text').innerText;
  const input = document.getElementById('user-input').value;
  const wordsTyped = input.trim().split(/\s+/).length;
  const wpm = wordsTyped;
  const accuracy = Math.max(0, 100 - Math.abs(text.length - input.length) * 100 / text.length);
  document.getElementById('results').innerText =
    `Speed: ${wpm} WPM | Accuracy: ${accuracy.toFixed(2)}%`;
}


