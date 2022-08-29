const submitContainer = document.querySelector('.submit-container');


const { log: l } = console;

const changePageHelper = () => {
        submitContainer?.addEventListener('click', () => {
            window.location.href = './successfully-add.html';
        })
}

changePageHelper();