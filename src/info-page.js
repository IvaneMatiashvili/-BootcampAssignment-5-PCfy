const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');


const loadCurrentPage = () => {
    if (employeeInfo.style.display === 'flex') {
        localStorage.setItem('info-page-content', '0')
    }
    
    if (laptopInfo.style.display === 'flex') {
        localStorage.setItem('info-page-content', '1')
    }
    

    if (employeeLine.style.display === 'block') {
        localStorage.setItem('info-page-line', '0')
    }
    
    if (laptopLine.style.display === 'flex') {
        localStorage.setItem('info-page-line', '1')
    }


    if(localStorage.getItem('info-page-content') === '0') {
        employeeInfo.style.display = 'flex';
        laptopInfo.style.display = 'none';
    }
    
    if(localStorage.getItem('info-page-content') === '1') {
        laptopInfo.style.display = 'flex';
        employeeInfo.style.display = 'none';
    }

    
    if(localStorage.getItem('info-page-line') === '0') {
        employeeLine.style.display = 'flex';
        laptopLine.style.display = 'none';
    }
    
    if(localStorage.getItem('info-page-line') === '1') {
        laptopLine.style.display = 'flex';
        employeeLine.style.display = 'none';
    }
}


loadCurrentPage();