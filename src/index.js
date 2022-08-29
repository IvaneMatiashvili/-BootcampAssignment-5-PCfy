const navBtnContainer = document.querySelectorAll('.nav-btn-container');

const { log: l } = console;

const changePageHelper = () => {
        navBtnContainer[0]?.addEventListener('click', () => {
            window.location.href = './info-page.html';
        })
        
        navBtnContainer[1]?.addEventListener('click', () => {
            window.location.href = './';
        })
}

changePageHelper();