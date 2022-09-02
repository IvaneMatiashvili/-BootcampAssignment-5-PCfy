import { validator } from './index.js';

const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

const imgLabel = document.querySelectorAll('.img-label');
const imgErrorIcon = document.querySelector('.img-error-icon');

let imageInput = document.querySelector('.upload-img');
const imgFormContainer = document.querySelector('.img-form-container');
const imgForm = document.querySelector('.img-form');

const laptopInfoValidationErrorArray = document.querySelectorAll('.laptop-info-validation-error');
const laptopPageLabelErrorArray = document.querySelectorAll('.laptop-page-label-error');
const inputArray = new Array();

const laptopNameLabel = document.querySelector('.laptop-name-label');
const laptopName = document.querySelector('.laptop-name');

inputArray.push(laptopName);

const selectBoxLaptopBrand = document.querySelector('.select-box-laptop-brand');
const selectBoxCPU = document.querySelector('.select-box-CPU');

const laptopBrandName = document.querySelector('.laptop-brand-name');
const CPUName = document.querySelector('.CPU-name');

const laptopBrand = document.querySelector('.laptop-brand');
const CPUOptionContainer = document.querySelector('.CPU-option-container');

laptopBrand.addEventListener('resize', () => {
    laptopBrand.style.width = '1rem';

});

const cpuCoreLabel = document.querySelector('.cpu-core-label');
const cpuThreadLabel = document.querySelector('.cpu-thread-label');

const cpuCore = document.querySelector('.cpu-core');
const cpuThread = document.querySelector('.cpu-thread');

inputArray.push(cpuCore);
inputArray.push(cpuThread);

const laptopRamLabel = document.querySelector('.ram-label');
const laptopRam = document.querySelector('.laptop-ram');

inputArray.push(laptopRam);

const memoryTypeLabel = document.querySelector('.memory-type-label');
const memoryType = document.querySelectorAll('.memory-type');
const memoryErrorIcon = document.querySelector('.memory-error-icon');

const purchaseNumberLabel = document.querySelector('.purchase-number-label');
const laptopPriceLabel = document.querySelector('.laptop-price-label');

const purchaseNumber = document.querySelector('.purchase-number');
const laptopPrice = document.querySelector('.laptop-price');

inputArray.push(laptopPrice);

const onBlurSelectLaptopBrand = document.querySelector('.on-blur-select-laptop-brand');
const onBlurSelectCPU = document.querySelector('.on-blur-select-CPU');

const laptopStatusLabel = document.querySelector('.laptop-status-label');
const laptopStatus = document.querySelectorAll('.laptop-status');
const laptopStatusErrorIcon = document.querySelector('.laptop-status-error-icon');

const goBackBtn = document.querySelector('.go-back-btn');
const submitContainer = document.querySelector('.submit-container');


const { log: l } = console;


const imgUploadGenerator = () => {
    imageInput.addEventListener('click', () => {
        imgLabel[0].style.color = '#4386A9';
        imgLabel[1].style.color = '#4386A9';
        imgErrorIcon.style.display = 'none';
        imgFormContainer.classList.remove('img-border-error');
    })

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



const laptopInfoPageLocalStorage = () => {

    laptopName.addEventListener('input', () => {
        localStorage.setItem("laptop-name", `${laptopName.value.trim()}`);

        laptopName.classList.remove('error');
        laptopPageLabelErrorArray[0].style.color = '#000000';
        laptopInfoValidationErrorArray[0].style.color = '#2E2E2E';
    });

    if (localStorage.getItem("laptop-name")) {

        laptopName.value = localStorage.getItem("laptop-name");
    }

    laptopRam.addEventListener('input', () => {
        localStorage.setItem("laptop-ram", `${laptopRam.value.trim()}`);

        laptopRam.classList.remove('error');
        laptopPageLabelErrorArray[3].style.color = '#000000';
        laptopInfoValidationErrorArray[3].style.color = '#2E2E2E';

    });

    if (localStorage.getItem("laptop-ram")) {

        laptopRam.value = localStorage.getItem("laptop-ram");
    }

    cpuCore.addEventListener('input', () => {
        localStorage.setItem("cpu-core", `${cpuCore.value.trim()}`);

        cpuCore.classList.remove('error');
        laptopPageLabelErrorArray[1].style.color = '#000000';
        laptopInfoValidationErrorArray[1].style.color = '#2E2E2E';

    });

    if (localStorage.getItem("cpu-core")) {

        cpuCore.value = localStorage.getItem("cpu-core");
    }

    cpuThread.addEventListener('input', () => {
        localStorage.setItem("cpu-thread", `${cpuThread.value.trim()}`);

        cpuThread.classList.remove('error');
        laptopPageLabelErrorArray[2].style.color = '#000000';
        laptopInfoValidationErrorArray[2].style.color = '#2E2E2E';

    });

    if (localStorage.getItem("cpu-thread")) {

        cpuThread.value = localStorage.getItem("cpu-thread");
    }

    purchaseNumber.addEventListener('input', () => {
        localStorage.setItem("purchase-number", `${purchaseNumber.value.trim()}`);

    });

    if (localStorage.getItem("purchase-number")) {

        purchaseNumber.value = localStorage.getItem("purchase-number");
    }

    laptopPrice.addEventListener('input', () => {
        localStorage.setItem("laptop-price", `${laptopPrice.value.trim()}`);

        laptopPrice.classList.remove('error');
        laptopPageLabelErrorArray[4].style.color = '#000000';
        laptopInfoValidationErrorArray[4].style.color = '#2E2E2E';

    });

    if (localStorage.getItem("laptop-price")) {

        laptopPrice.value = localStorage.getItem("laptop-price");
    }


}

laptopInfoPageLocalStorage();


const addFocusWithLabel = () => {
    laptopNameLabel.addEventListener('click', () => {
        laptopName.focus();
    });


    laptopRamLabel.addEventListener('click', () => {
        laptopRam.focus();
    });


    cpuCoreLabel.addEventListener('click', () => {
        cpuCore.focus();
    });


    cpuThreadLabel.addEventListener('click', () => {
        cpuThread.focus()
    });


    purchaseNumberLabel.addEventListener('click', () => {
        purchaseNumber.focus();
    });


    laptopPriceLabel.addEventListener('click', () => {
        laptopPrice.focus();
    });
}

addFocusWithLabel();




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
        selectBoxName.classList.remove('select-box-error');

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


        selectBoxLaptopBrand.classList.remove('select-box-error');
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

        selectBoxCPU.classList.remove('select-box-error');
    })

    if (localStorage.getItem('CPU-name')) {

        CPUName.textContent = localStorage.getItem('CPU-name');
    }
}

getCPUData();



const laptopInfoPageValidator = () => {
    localStorage.setItem('count-validator-laptop-info', '0');
    for (let i = 0; i < 5; i++) {
        if (validator(inputArray[i].value, inputArray[i].name) === false) {
            inputArray[i].classList.add('error');
            laptopPageLabelErrorArray[i].style.color = '#E52F2F';
            laptopInfoValidationErrorArray[i].style.color = '#E52F2F';
        } else {

            let counter = +localStorage.getItem('count-validator-laptop-info');
            counter++;
            localStorage.setItem('count-validator-laptop-info', `${counter}`);
        }
    }
    selectBoxValidator();
    memoryTypeCheckboxValidator();
    laptopStatusCheckboxValidator();
    imgValidator();
}



const selectBoxValidator = () => {
    if (laptopBrandName.textContent.trim() === 'ლეპტოპის ბრენდი') {
        selectBoxLaptopBrand.classList.add('select-box-error');
    } else {
        let counter = +localStorage.getItem('count-validator-laptop-info');
        counter++;
        localStorage.setItem('count-validator-laptop-info', `${counter}`);
    }
    if (CPUName.textContent.trim() === 'CPU') {
        selectBoxCPU.classList.add('select-box-error');
    } else {
        let counter = +localStorage.getItem('count-validator-laptop-info');
        counter++;
        localStorage.setItem('count-validator-laptop-info', `${counter}`);

    }
}




const checkOrNot = (element, name) => {
    element.forEach((el, inx) => {
        if (localStorage.getItem(`${name}`)) {
            if (el.value === localStorage.getItem(`${name}`)) {
                el.value.checked === true;
                el.classList.add('checked');

                if (element === memoryType) {

                    memoryErrorIcon.style.display = 'none';
                    memoryTypeLabel.style.color = '#000000';
                }

                if (element === laptopStatus) {

                    laptopStatusErrorIcon.style.display = 'none';
                    laptopStatusLabel.style.color = '#000000';
                }
            }
        }
        el.addEventListener('input', (e) => {
            if (el.checked === true) {
                localStorage.setItem(`${name}`, `${el.value}`);
                el.classList.add('checked');

                if (element === memoryType) {

                    memoryErrorIcon.style.display = 'none';
                    memoryTypeLabel.style.color = '#000000';
                }

                if (element === laptopStatus) {

                    laptopStatusErrorIcon.style.display = 'none';
                    laptopStatusLabel.style.color = '#000000';
                }
            }
            if (inx === 0) {
                element[1].classList.remove('checked');
            } else {
                element[0].classList.remove('checked');

            }
        })

    })
}


checkOrNot(memoryType, 'memory-type');
checkOrNot(laptopStatus, 'laptop-status');

const memoryTypeCheckboxValidator = () => {
    if (localStorage.getItem('memory-type') === 'SSD' || localStorage.getItem('memory-type') === 'HDD') {
        memoryErrorIcon.style.display = 'none';
        memoryTypeLabel.style.color = '#000000';

        let counter = +localStorage.getItem('count-validator-laptop-info');
        counter++;
        localStorage.setItem('count-validator-laptop-info', `${counter}`);

    } else {
        memoryErrorIcon.style.display = 'block';
        memoryTypeLabel.style.color = '#E52F2F';
    }
}

const laptopStatusCheckboxValidator = () => {
    if (localStorage.getItem('laptop-status') === 'new' || localStorage.getItem('laptop-status') === 'old') {
        laptopStatusErrorIcon.style.display = 'none';
        laptopStatusLabel.style.color = '#000000';

        let counter = +localStorage.getItem('count-validator-laptop-info');
        counter++;
        localStorage.setItem('count-validator-laptop-info', `${counter}`);

    } else {
        laptopStatusErrorIcon.style.display = 'block';
        laptopStatusLabel.style.color = '#E52F2F';
    }
}

const imgValidator = () => {

    if (localStorage.getItem('resent-image')) {
        imgLabel[0].style.color = '#4386A9';
        imgLabel[1].style.color = '#4386A9';
        imgErrorIcon.style.display = 'none';
        imgFormContainer.classList.remove('img-border-error')

        let counter = +localStorage.getItem('count-validator-laptop-info');
        counter++;
        localStorage.setItem('count-validator-laptop-info', `${counter}`);
    } else {
        imgLabel[0].style.color = '#E52F2F';
        imgLabel[1].style.color = '#E52F2F';
        imgErrorIcon.style.display = 'block';
        imgFormContainer.classList.add('img-border-error');

    }
}

const changePageHelper = () => {

    submitContainer?.addEventListener('click', () => {
        laptopInfoPageValidator();
        if (localStorage.getItem('count-validator-laptop-info') === '10') {
            window.location.href = './successfully-add.html';
        }
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