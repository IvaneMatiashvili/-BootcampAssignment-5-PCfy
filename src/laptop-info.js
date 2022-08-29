const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');
const goBackBtn = document.querySelector('.go-back-btn');
const submitContainer = document.querySelector('.submit-container');


const { log: l } = console;

const changePageHelper = () => {
        submitContainer?.addEventListener('click', () => {
            window.location.href = './successfully-add.html';
        })
}

changePageHelper();


const showEmployeeInfo = () => {
    goBackBtn?.addEventListener('click', () => {
        laptopInfo.style.display = 'none';
        employeeInfo.style.display = 'flex';
    })
}

showEmployeeInfo();