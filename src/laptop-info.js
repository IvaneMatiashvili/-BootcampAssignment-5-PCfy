const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

let imageInput = document.querySelector('.upload-img');
const imgFormContainer = document.querySelector('.img-form-container');
const imgForm = document.querySelector('.img-form');

const goBackBtn = document.querySelector('.go-back-btn');
const submitContainer = document.querySelector('.submit-container');


const { log: l } = console;



const imgUploadGenerator = () => {

    let uploadedImage = "";
    imageInput.addEventListener('change', function () {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            uploadedImage = reader.result;
            localStorage.setItem('resent-image', uploadedImage);

            imgFormContainer.style.backgroundImage = `url(${uploadedImage})`;
            imgForm.style.opacity = '0';
            imageInput.title = 'upload new file';
        })
        reader.readAsDataURL(this.files[0]);
    })

    if (localStorage.getItem('resent-image')) {

        imgFormContainer.style.backgroundImage = `url(${localStorage.getItem('resent-image')})`;
        imgForm.style.opacity = '0';
        imageInput.title = 'upload new file';
    }

}

imgUploadGenerator();































const changePageHelper = () => {
    submitContainer?.addEventListener('click', () => {
        window.location.href = './successfully-add.html';
    })
}

changePageHelper();


const showEmployeeInfo = () => {
    goBackBtn?.addEventListener('click', () => {
      
        window.location.href = './info-page.html';
        
        laptopInfo.style.display = 'none';
        employeeInfo.style.display = 'flex';

        localStorage.setItem('info-page-content', '0')
        localStorage.setItem('info-page-line', '0')

        laptopLine.style.display = 'none';
        employeeLine.style.display = 'block';
    })
}

showEmployeeInfo();