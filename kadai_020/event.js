
const newText = document.getElementById('text');
const outputBtn = document.getElementById('btn');

outputBtn.addEventListener('click', () => {
    newText.textContent = 'ボタンをクリックしました';
});