const employeeInfo = document.querySelector('.employee-info')
const laptopInfo = document.querySelector('.laptop-info')
const nextBtnBackgroundContainer = document.querySelector('.next-btn-background-container');
const nextBtn = document.querySelector('.next-btn');

const { log: l } = console;


const showLaptopInfo = () => {
    nextBtn?.addEventListener('click', () => {
        employeeInfo.style.display = 'none';
        laptopInfo.style.display = 'flex';
    })
    
    nextBtnBackgroundContainer?.addEventListener('click', () => {
        employeeInfo.style.display = 'none';
        laptopInfo.style.display = 'flex';
    })
}

showLaptopInfo();