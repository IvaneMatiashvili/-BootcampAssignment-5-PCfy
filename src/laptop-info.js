const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

let imageInput = document.querySelector('.upload-img');
const imgFormContainer = document.querySelector('.img-form-container');
const imgForm = document.querySelector('.img-form');

const laptopNameLabel = document.querySelector('.laptop-name-label');
const laptopName = document.querySelector('.laptop-name');

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

const laptopRamLabel = document.querySelector('.ram-label');
const laptopRam = document.querySelector('.laptop-ram');

const memoryType = document.querySelectorAll('.memory-type');

const purchaseNumberLabel = document.querySelector('.purchase-number-label');
const laptopPriceLabel = document.querySelector('.laptop-price-label');

const purchaseNumber = document.querySelector('.purchase-number');
const laptopPrice = document.querySelector('.laptop-price');

const onBlurSelectLaptopBrand = document.querySelector('.on-blur-select-laptop-brand');
const onBlurSelectCPU = document.querySelector('.on-blur-select-CPU');

const laptopStatus = document.querySelectorAll('.laptop-status');

const goBackBtn = document.querySelector('.go-back-btn');
const submitContainer = document.querySelector('.submit-container');


const { log: l } = console;



const laptopInfoPageLocalStorage = () => {

    laptopName.addEventListener('input', () => {
        localStorage.setItem("laptop-name", `${laptopName.value.trim()}`);
    });

    if (localStorage.getItem("laptop-name")) {

        laptopName.value = localStorage.getItem("laptop-name");
    }

    laptopRam.addEventListener('input', () => {
        localStorage.setItem("laptop-ram", `${laptopRam.value.trim()}`);

    });

    if (localStorage.getItem("laptop-ram")) {

        laptopRam.value = localStorage.getItem("laptop-ram");
    }

    cpuCore.addEventListener('input', () => {
        localStorage.setItem("cpu-core", `${cpuCore.value.trim()}`);

    });

    if (localStorage.getItem("cpu-core")) {

        cpuCore.value = localStorage.getItem("cpu-core");
    }

    cpuThread.addEventListener('input', () => {
        localStorage.setItem("cpu-thread", `${cpuThread.value.trim()}`);

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




const checkOrNot = (element, name) => {
    element.forEach((el, inx) => {
        if (localStorage.getItem(`${name}`)) {
            if (el.value === localStorage.getItem(`${name}`)) {
                el.value.checked === true;
                el.classList.add('checked');
            }
        }
        el.addEventListener('input', (e) => {
            if (el.checked === true) {
                localStorage.setItem(`${name}`, `${el.value}`);
                el.classList.add('checked');
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