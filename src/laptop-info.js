const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

let imageInput = document.querySelector('.upload-img');
const imgFormContainer = document.querySelector('.img-form-container');
const imgForm = document.querySelector('.img-form');

const selectBoxLaptopBrand = document.querySelector('.select-box-laptop-brand');
const selectBoxCPU = document.querySelector('.select-box-CPU');

const laptopBrandName = document.querySelector('.laptop-brand-name');
const CPUName = document.querySelector('.CPU-name');


const laptopBrand = document.querySelector('.laptop-brand');
const CPUOptionContainer = document.querySelector('.CPU-option-container');

const onBlurSelectLaptopBrand = document.querySelector('.on-blur-select-laptop-brand');
const onBlurSelectCPU = document.querySelector('.on-blur-select-CPU');

const goBackBtn = document.querySelector('.go-back-btn');
const submitContainer = document.querySelector('.submit-container');


const { log: l } = console;



const selectBoxGenerator = () => {
    laptopBrand.style.display = 'none';

    localStorage.setItem('laptop-brand-select-box-click-counter', '0');
    let laptopBrandSelectBoxClickCounter = localStorage.getItem('laptop-brand-select-box-click-counter');

    let laptopBrandSiblingElement = selectBoxCPU;
    selectOptionGenerator(laptopBrand, selectBoxLaptopBrand, laptopBrandSelectBoxClickCounter, onBlurSelectLaptopBrand, laptopBrandSiblingElement);

    CPUOptionContainer.style.display = 'none';

    localStorage.setItem('CPU-select-box-click-counter', '0');
    let CPUSelectBoxClickCounter = localStorage.getItem('CPU-select-box-click-counter');

    let CPUSiblingElement = selectBoxLaptopBrand;
    selectOptionGenerator(CPUOptionContainer, selectBoxCPU, CPUSelectBoxClickCounter, onBlurSelectCPU, CPUSiblingElement);

}



const selectOptionGenerator = (selectBox, selectBoxName, selectBoxClickCounter, customOnBlur, siblingElement) => {

    siblingElement.style.position = 'static';

    let boxClickCounter = +selectBoxClickCounter;


    selectBoxName.addEventListener('click', () => {
        selectBox.style.display = 'flex';

        if (boxClickCounter % 2 === 1) {
            selectBox.style.display = 'none';
            customOnBlur.style.display = 'none';

            selectBoxName.style.position = 'static';
            siblingElement.style.position = 'static';

        } else {
            selectBox.style.display = 'flex';
            customOnBlur.style.display = 'flex';

            selectBoxName.style.position = 'relative';
            siblingElement.style.position = 'static';

        }
        boxClickCounter++;


    })


    customOnBlur?.addEventListener('click', () => {

        selectBox.style.display = 'none';
        boxClickCounter--;
        customOnBlur.style.display = 'none';

        selectBoxName.style.position = 'static';
        siblingElement.style.position = 'static';

    })


}


selectBoxGenerator();



let laptopBrandResult = new Array();

async function getLaptopBranData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/brands');
    const responseData = await response.json();
    laptopBrandResult = responseData.data;

    laptopBrandResult?.forEach((elm) => {
        let div = document.createElement('div');
        div.classList.add('custom-option');
        let node = document.createTextNode(elm.name);


        div.appendChild(node);
        laptopBrand.appendChild(div);


        div?.addEventListener('click', () => {

            laptopBrand.style.display = 'none';

            localStorage.setItem('laptop-brand-select-box-click-counter', '0');
            let laptopBrandSelectBoxClickCounter = localStorage.getItem('laptop-brand-select-box-click-counter');

            onBlurSelectLaptopBrand.style.display = 'none';

            let laptopBrandSiblingElement = selectBoxCPU;
            selectOptionGenerator(laptopBrand, selectBoxLaptopBrand, laptopBrandSelectBoxClickCounter, onBlurSelectLaptopBrand, laptopBrandSiblingElement);


            laptopBrandName.textContent = elm.name;


            localStorage.setItem('laptop-brand-name', laptopBrandName.textContent.trim());
        })


    })


    if (localStorage.getItem('laptop-brand-name')) {

        laptopBrandName.textContent = localStorage.getItem('laptop-brand-name');
    }

}

getLaptopBranData();


let CPUResult = new Array();

async function getCPUData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/cpus');
    const responseData = await response.json();
    CPUResult = responseData.data;

    CPUResult?.forEach((elm) => {
        let div = document.createElement('div');
        div.classList.add('custom-option');
        let node = document.createTextNode(elm.name);


        div.appendChild(node);
        CPUOptionContainer.appendChild(div);

        div?.addEventListener('click', () => {

            CPUOptionContainer.style.display = 'none';

            localStorage.setItem('CPU-select-box-click-counter', '0');
            let CPUSelectBoxClickCounter = localStorage.getItem('CPU-select-box-click-counter');

            onBlurSelectCPU.style.display = 'none';

            let CPUSiblingElement = selectBoxLaptopBrand;
            selectOptionGenerator(CPUOptionContainer, selectBoxCPU, CPUSelectBoxClickCounter, onBlurSelectCPU, CPUSiblingElement);

            CPUName.textContent = elm.name;


            localStorage.setItem('CPU-name', CPUName.textContent.trim());

        })
    })

    if (localStorage.getItem('CPU-name')) {

        CPUName.textContent = localStorage.getItem('CPU-name');
    }
}

getCPUData();
























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