const navBtn = document.querySelectorAll('.nav-btn');

const { log: l } = console;


const changePageHelper = () => {
        navBtn[0]?.addEventListener('click', () => {
            window.location.href = './info-page.html';
        })
        
        navBtn[1]?.addEventListener('click', () => {
            window.location.href = './';
        })
}

changePageHelper();