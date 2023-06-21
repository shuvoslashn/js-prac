const btn = document.getElementById('my-btn');
const para = document.getElementById('my-para');

btn.addEventListener('click', () => {
    para.innerHTML = 'Button Clicked!';
});
