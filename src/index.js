const navBtnContainer = document.querySelectorAll('.nav-btn-container');
const btn = document.querySelector('.btn');


const { log: l } = console;
btn.textContent[1].style.Height = '100px';
l(btn.textContent.trim()[1]);

const changePageHelper = () => {
        navBtnContainer[0]?.addEventListener('click', () => {
            window.location.href = './info-page.html';
        })
        
        navBtnContainer[1]?.addEventListener('click', () => {
            window.location.href = './';
        })
}

changePageHelper();