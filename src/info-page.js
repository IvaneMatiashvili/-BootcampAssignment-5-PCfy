const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');


const loadCurrentPage = () => {
    if (employeeInfo.style.display === 'flex') {
        localStorage.setItem('info-page-content', '0')
    }
    
    if (laptopInfo.style.display === 'flex') {
        localStorage.setItem('info-page-content', '1')
    }


    if(localStorage.getItem('info-page-content') === '0') {
        employeeInfo.style.display = 'flex';
        laptopInfo.style.display = 'none';
    }
    
    if(localStorage.getItem('info-page-content') === '1') {
        laptopInfo.style.display = 'flex';
        employeeInfo.style.display = 'none';
    }
}

loadCurrentPage();