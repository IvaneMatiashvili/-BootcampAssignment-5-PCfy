
const seeListBtnContainer = document.querySelector('.see-list-btn-container');


const { log: l } = console;

const changePageHelper = () => {
        seeListBtnContainer?.addEventListener('click', () => {
            window.location.href = './';
        })
}

changePageHelper();