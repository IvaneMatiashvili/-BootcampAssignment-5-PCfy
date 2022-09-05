import { validator } from './index.js';

const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const header = document.querySelector('header');

const backArrowContainerEmployee = document.querySelector('.back-arrow-container-employee');
const backArrowContainerLaptop = document.querySelector('.back-arrow-container-laptop');

const backArrowIconLaptop = document.querySelector('.back-arrow-icon-laptop');

const employeeInfoHeader = document.querySelector('.employee-info-header');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

const imgLabel = document.querySelectorAll('.img-label');
const imgErrorIcon = document.querySelector('.img-error-icon');

let imageInput = document.querySelector('.upload-img');
const imgFormContainer = document.querySelector('.img-form-container');
const imgForm = document.querySelector('.img-form');

const addImageIcon = document.querySelector('.add-image-icon');

const uploadAgainContainer = document.querySelector('.upload-again-container');

const imgNameAfterUpload = document.querySelector('.img-name');
const imgSize = document.querySelector('.img-size');

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

let imageValue;


const imgUploadGenerator = () => {
    imageInput.addEventListener('click', () => {
        imgLabel[0].style.color = '#4386A9';
        imgLabel[1].style.color = '#4386A9';
        imgErrorIcon.style.display = 'none';
        addImageIcon.style.background = 'url(../icon/photo.png) no-repeat, url(../icon/upload-laptop-image.png) no-repeat'
        imgFormContainer.classList.remove('img-border-error');
    })

    let uploadedImage = "";
    imageInput.addEventListener('change', function (e) {
        const reader = new FileReader();
        reader.addEventListener('load', (e) => {
            uploadedImage = reader.result;
            localStorage.setItem('resent-image', uploadedImage);


            imgFormContainer.style.backgroundImage = `url(${uploadedImage})`;
            imgForm.style.opacity = '0';
            imageInput.title = 'upload new file';
        })
        reader.readAsDataURL(this.files[0]);
        imageValue = e.target.files[0];

        uploadAgainContainer.style.display = 'flex';

        imgNameAfterUpload.textContent = `${e.target.files[0].name},`;
        localStorage.setItem('image-name-after-upload', e.target.files[0].name);

        function bytesToSize(bytes) {
            const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB']
            if (bytes === 0) return 'n/a'
            const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10)
            if (i === 0) return `${bytes} ${sizes[i]})`
            return `${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`
        }

        let size = +e.target.files[0].size;

        imgSize.textContent = bytesToSize(size);
        localStorage.setItem('image-size', imgSize.textContent.trim());

    })


    if (localStorage.getItem('resent-image')) {

        imgFormContainer.style.backgroundImage = `url(${localStorage.getItem('resent-image')})`;
        imgForm.style.opacity = '0';
        imageInput.title = 'upload new file';

        function dataURLtoFile(base64, filename) {

            let arr = base64.split(','),
                mime = arr[0].match(/:(.*?);/)[1],
                bstr = atob(arr[1]),
                n = bstr.length,
                u8arr = new Uint8Array(n);

            while (n--) {
                u8arr[n] = bstr.charCodeAt(n);
            }

            return new File([u8arr], filename, { type: mime });
        }

        let base64 = localStorage.getItem('resent-image');
        imageValue = dataURLtoFile(base64, 'image/*');

        uploadAgainContainer.style.display = 'flex';

        imgNameAfterUpload.textContent = localStorage.getItem('image-name-after-upload');

        imgSize.textContent = localStorage.getItem('image-size');

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

            localStorage.setItem('laptop-brand-id', `${elm.id}`);

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

            localStorage.setItem('cpu-id', `${elm.id}`);

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
    if (localStorage.getItem('laptop-status') === 'new' || localStorage.getItem('laptop-status') === 'used') {
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
        addImageIcon.style.background = 'url(../icon/photo.png) no-repeat, url(../icon/upload-laptop-image.png) no-repeat'
        imgFormContainer.classList.remove('img-border-error')

        let counter = +localStorage.getItem('count-validator-laptop-info');
        counter++;
        localStorage.setItem('count-validator-laptop-info', `${counter}`);
    } else {
        imgLabel[0].style.color = '#E52F2F';
        imgLabel[1].style.color = '#E52F2F';
        imgErrorIcon.style.display = 'block';

        addImageIcon.style.background = 'url(../icon/photo.png) no-repeat, url(../icon/red-upload-laptop-img.png) no-repeat'
        imgFormContainer.classList.add('img-border-error');

    }
}

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

    employeeInfoHeader?.addEventListener('click', () => {

        window.location.href = './info-page.html';

        laptopInfo.style.display = 'none';
        employeeInfo.style.display = 'flex';

        localStorage.setItem('info-page-content', '0')
        localStorage.setItem('info-page-line', '0')

        laptopLine.style.display = 'none';
        employeeLine.style.display = 'block';
    })

    backArrowIconLaptop?.addEventListener('click', () => {

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


async function submitData() {

    const firstNameValue = localStorage.getItem('first-name');
    const lastNameValue = localStorage.getItem('last-name');
    const teamId = +localStorage.getItem('team-id');
    const positionId = +localStorage.getItem('position-id');
    const phoneValue = localStorage.getItem('phone');
    const emailValue = localStorage.getItem('email');
    const token = '9dad885aff6e25fbfd4e379aba0c893d';
    const laptopNameValue = localStorage.getItem("laptop-name")
    //imageValue
    const laptopBrandId = +localStorage.getItem('laptop-brand-id');
    const laptopCpuValue = localStorage.getItem('CPU-name');
    const cpuCoreValue = +localStorage.getItem("cpu-core");
    const cpuThreadValue = +localStorage.getItem("cpu-thread");
    const laptopRamValue = +localStorage.getItem("laptop-ram");
    const memoryTypeValue = localStorage.getItem("memory-type");
    const laptopState = localStorage.getItem("laptop-status");
    const purchaseNumberValue = localStorage.getItem("purchase-number");
    const laptopPriceValue = +localStorage.getItem("laptop-price");

    const formData = new FormData();

    formData.append('name', firstNameValue);
    formData.append('surname', lastNameValue)
    formData.append('team_id', teamId)
    formData.append('position_id', positionId)
    formData.append('phone_number', phoneValue)
    formData.append('email', emailValue)
    formData.append('token', token)
    formData.append('laptop_name', laptopNameValue)
    formData.append('laptop_image', imageValue)
    formData.append('laptop_brand_id', laptopBrandId)
    formData.append('laptop_cpu', laptopCpuValue)
    formData.append('laptop_cpu_cores', cpuCoreValue)
    formData.append('laptop_cpu_threads', cpuThreadValue)
    formData.append('laptop_ram', laptopRamValue)
    formData.append('laptop_hard_drive_type', memoryTypeValue)
    formData.append('laptop_state', laptopState)
    formData.append('laptop_purchase_date', purchaseNumberValue)
    formData.append('laptop_price', laptopPriceValue)

    let res = await fetch('https://pcfy.redberryinternship.ge/api/laptop/create', {
        method: 'POST',
        body: formData,
    })
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(error => console.log(error))

    document.querySelectorAll('input').forEach(element => {
        element.value = '';
    })

    localStorage.clear()

    window.location.href = './successfully-add.html';

}



const changePageHelper = () => {

    submitContainer?.addEventListener('click', () => {
        laptopInfoPageValidator();
        if (localStorage.getItem('count-validator-laptop-info') === '10') {
            submitData();
        }
    })

}

changePageHelper();

backArrowContainerLaptop.style.display = 'none';
backArrowContainerEmployee.style.display = 'flex';

const navigator = () => {

    if (laptopInfo.style.display === 'flex') {

        backArrowContainerLaptop.style.display = 'flex';
        backArrowContainerEmployee.style.display = 'none';

        if (window.matchMedia('screen and (max-width: 768px)').matches) {

            if (localStorage.getItem('info-page-content') === '1') {
                header.style.background = '#F6F6F6 url(../icon/laptop-features.png)';
            }

        } else {
            header.style.background = 'none';

        }

        window.addEventListener('resize', () => {
            if (window.matchMedia('screen and (max-width: 768px)').matches) {

                if (localStorage.getItem('info-page-content') === '1') {
                    header.style.background = '#F6F6F6 url(../icon/laptop-features.png)';
                }

            } else {
                header.style.background = 'none';

            }

        });

    }
}

navigator()