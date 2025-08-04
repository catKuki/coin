const coin = document.getElementById('coin');
const button = document.getElementById('tossButton');

button.addEventListener('click', () => {
    const result = Math.random() < 0.5 ? '$' : '1';

    coin.classList.add('spin');
    setTimeout(() => {
        coin.classList.remove('spin');
        coin.textContent = result;
    }, 800);
});