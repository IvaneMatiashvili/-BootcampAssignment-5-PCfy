const seeListBtnContainer = document.querySelector('.see-list-btn-container');



const { log: l } = console;


const changePageHelper = () => {
    seeListBtnContainer?.addEventListener('click', () => {
        localStorage.setItem('to-entries-list-page', './successfully-add.html');

        window.location.href = './entries-list-page.html';
    })
}

changePageHelper();