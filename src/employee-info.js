import { validator } from './index.js';

const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const header = document.querySelector('header');

const backArrowContainerEmployee = document.querySelector('.back-arrow-container-employee');
const backArrowContainerLaptop = document.querySelector('.back-arrow-container-laptop');

const backArrowIconEmployee = document.querySelector('.back-arrow-icon-employee');

const laptopInfoHeader = document.querySelector('.laptop-info-header');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

const inputArray = new Array();
const validationErrorArray = document.querySelectorAll('.validation-error');
const labelArray = document.querySelectorAll('.label-array');

const firstNameLabel = document.querySelector('.first-name-label');
const lastNameLabel = document.querySelector('.last-name-label');

const firstName = document.querySelector('.first-name');
inputArray.push(firstName)

const lastName = document.querySelector('.last-name');
inputArray.push(lastName)

const selectBoxTeam = document.querySelector('.select-box-team');
const selectBoxPosition = document.querySelector('.select-box-position');

const teamName = document.querySelector('.team-name');
const positionName = document.querySelector('.position-name');


const team = document.querySelector('.team');
const position = document.querySelector('.position');

const onBlurSelectTeam = document.querySelector('.on-blur-select-team');
const onBlurSelectPosition = document.querySelector('.on-blur-select-position');

const emailLabel = document.querySelector('.email-label');
const phoneLabel = document.querySelector('.phone-label');

const email = document.querySelector('.email');
inputArray.push(email)


const phone = document.querySelector('.phone');
inputArray.push(phone)


const nextBtnBackgroundContainer = document.querySelector('.next-btn-background-container');
const nextBtn = document.querySelector('.next-btn');

const { log: l } = console;


const employeeInfoPageLocalStorage = () => {

    firstName.addEventListener('input', () => {
        localStorage.setItem("first-name", `${firstName.value.trim()}`);

        firstName.classList.remove('error');


        labelArray[0].style.color = '#000000';
        validationErrorArray[0].style.color = '#2E2E2E';

    });

    if (localStorage.getItem("first-name")) {

        firstName.value = localStorage.getItem("first-name");
    }


    lastName.addEventListener('input', () => {
        localStorage.setItem("last-name", `${lastName.value.trim()}`);
        lastName.classList.remove('error');

        labelArray[1].style.color = '#000000';
        validationErrorArray[1].style.color = '#2E2E2E';

    });
    if (localStorage.getItem("last-name")) {

        lastName.value = localStorage.getItem("last-name");
    }


    email.addEventListener('input', () => {
        localStorage.setItem("email", `${email.value.trim()}`);
        email.classList.remove('error');

        labelArray[2].style.color = '#000000';
        validationErrorArray[2].style.color = '#2E2E2E';


    });

    if (localStorage.getItem("email")) {

        email.value = localStorage.getItem("email");
    }

    phone.addEventListener('input', () => {
        localStorage.setItem("phone", `${phone.value.trim()}`);
        phone.classList.remove('error');

        labelArray[3].style.color = '#000000';
        validationErrorArray[3].style.color = '#2E2E2E';


    });

    if (localStorage.getItem("phone")) {

        phone.value = localStorage.getItem("phone");
    }

}

employeeInfoPageLocalStorage();

const addFocusWithLabel = () => {
    firstNameLabel.addEventListener('click', () => {
        firstName.focus();
    })

    lastNameLabel.addEventListener('click', () => {
        lastName.focus();
    })

    emailLabel.addEventListener('click', () => {
        email.focus();
    })

    phoneLabel.addEventListener('click', () => {
        phone.focus();
    })
}

addFocusWithLabel();


let teamResult = new Array();
let teamId = 0;


const selectBoxGenerator = () => {
    team.style.display = 'none';

    localStorage.setItem('team-select-box-click-counter', '0');
    let teamSelectBoxClickCounter = localStorage.getItem('team-select-box-click-counter');

    let teamSiblingElement = selectBoxPosition;
    selectOptionGenerator(team, selectBoxTeam, teamSelectBoxClickCounter, onBlurSelectTeam, teamSiblingElement);

    if (localStorage.getItem('team-name')) {
        position.style.display = 'none';

        localStorage.setItem('position-select-box-click-counter', '0');
        let positionSelectBoxClickCounter = localStorage.getItem('position-select-box-click-counter');

        let positionSiblingElement = selectBoxTeam;
        selectOptionGenerator(position, selectBoxPosition, positionSelectBoxClickCounter, onBlurSelectPosition, positionSiblingElement);

        positionName.classList.remove('disabled-name');
    }

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


async function getTeamsData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/teams');
    const responseData = await response.json();
    teamResult = responseData.data;

    teamResult?.forEach((elm) => {
        let div = document.createElement('div');
        div.classList.add('custom-option');
        let node = document.createTextNode(elm.name);


        div.appendChild(node);
        team.appendChild(div);

        div?.addEventListener('click', () => {
            team.style.display = 'none';
            localStorage.setItem('team-select-box-click-counter', '0');

            let teamSelectBoxClickCounter = localStorage.getItem('team-select-box-click-counter');
            onBlurSelectTeam.style.display = 'none';

            let teamSiblingElement = selectBoxPosition;
            selectOptionGenerator(team, selectBoxTeam, teamSelectBoxClickCounter, onBlurSelectTeam, teamSiblingElement);



            teamName.textContent = elm.name;

            localStorage.setItem('team-open', 'YES');

            localStorage.setItem('team-name', teamName.textContent.trim());
            localStorage.setItem('team-id', `${elm.id}`);

            positionName.textContent = 'პოზიცია';
            localStorage.setItem('position-name', 'პოზიცია');

            if (localStorage.getItem('team-name')) {
                position.style.display = 'none';

                localStorage.setItem('position-select-box-click-counter', '0');
                let positionSelectBoxClickCounter = localStorage.getItem('position-select-box-click-counter');

                let positionSiblingElement = selectBoxTeam;
                selectOptionGenerator(position, selectBoxPosition, positionSelectBoxClickCounter, onBlurSelectPosition, positionSiblingElement);

                positionName.classList.remove('disabled-name');
            }

            selectBoxTeam.classList.remove('select-box-error');
        })

    })

    if (localStorage.getItem('team-name')) {

        teamName.textContent = localStorage.getItem('team-name');
    }

}
getTeamsData();

selectBoxPosition.addEventListener('click', (e) => {

    filterPositionsData();
})


let positionResult = new Array();

async function getPositionData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/positions');
    const responseData = await response.json();
    positionResult = responseData.data;

    selectBoxPosition.addEventListener('click', (e) => {

        filterPositionsData();
    })


    positionResult.forEach((elm, inx) => {
        if (inx === 0) {

            positionName.textContent = 'პოზიცია';
        }

        selectBoxPosition.addEventListener('click', (e) => {
            if (+localStorage.getItem('team-id') === elm.team_id) {

                let div = document.createElement('div');
                div.classList.add('custom-option');
                let node = document.createTextNode(elm.name);

                div.appendChild(node);
                position.appendChild(div);

                div?.addEventListener('click', () => {
                    position.style.display = 'none';
                    positionName.textContent = elm.name;

                    localStorage.setItem('position-select-box-click-counter', '0');
                    localStorage.setItem('position-id', `${elm.id}`);

                    let positionSelectBoxClickCounter = localStorage.getItem('position-select-box-click-counter');
                    onBlurSelectPosition.style.display = 'none';

                    let positionSiblingElement = selectBoxTeam;
                    selectOptionGenerator(position, selectBoxPosition, positionSelectBoxClickCounter, onBlurSelectPosition, positionSiblingElement);


                    localStorage.setItem('position-name', positionName.textContent.trim());

                    selectBoxPosition.classList.remove('select-box-error');
                })
            }

        })
    })


    if (localStorage.getItem('position-name')) {

        positionName.textContent = localStorage.getItem('position-name');

    }


}


getPositionData();

selectBoxPosition.addEventListener('click', (e) => {

    filterPositionsData();
})

const filterPositionsData = () => {
    for (let i = 0; i < position.children.length; i++) {
        position.children[i].remove();
    }

}



const employeeInfoPageValidator = () => {
    localStorage.setItem('count-validator', '0');
    for (let i = 0; i < 4; i++) {
        if (validator(inputArray[i].value, inputArray[i].name) === false) {
            inputArray[i].classList.add('error');
            labelArray[i].style.color = '#E52F2F';
            validationErrorArray[i].style.color = '#E52F2F';
        } else {

            let counter = +localStorage.getItem('count-validator');
            counter++;
            localStorage.setItem('count-validator', `${counter}`);
        }
    }
    selectBoxValidator();
}


const selectBoxValidator = () => {
    if (teamName.textContent.trim() === 'თიმი') {
        selectBoxTeam.classList.add('select-box-error');
    } else {
        let counter = +localStorage.getItem('count-validator');
        counter++;
        localStorage.setItem('count-validator', `${counter}`);
    }
    if (positionName.textContent.trim() === 'პოზიცია') {
        selectBoxPosition.classList.add('select-box-error');
    } else {
        let counter = +localStorage.getItem('count-validator');
        counter++;
        localStorage.setItem('count-validator', `${counter}`);

    }
}


const showLaptopInfo = () => {
    nextBtn?.addEventListener('click', () => {

        employeeInfoPageValidator();

        if (localStorage.getItem('count-validator') === '6') {

            window.location.href = './info-page.html';

            employeeInfo.style.display = 'none';
            laptopInfo.style.display = 'flex';

            localStorage.setItem('info-page-content', '1')
            localStorage.setItem('info-page-line', '1')

            employeeLine.style.display = 'none';
            laptopLine.style.display = 'flex';

        }

    })

    nextBtnBackgroundContainer?.addEventListener('click', () => {

        employeeInfoPageValidator();

        if (localStorage.getItem('count-validator') === '6') {

            window.location.href = './info-page.html';

            employeeInfo.style.display = 'none';
            laptopInfo.style.display = 'flex';

            localStorage.setItem('info-page-content', '1')
            localStorage.getItem('count-validation'); localStorage.setItem('info-page-line', '1')

            employeeLine.style.display = 'none';
            laptopLine.style.display = 'flex';
        }
    })

    laptopInfoHeader?.addEventListener('click', () => {

        employeeInfoPageValidator();

        if (localStorage.getItem('count-validator') === '6') {

            window.location.href = './info-page.html';

            employeeInfo.style.display = 'none';
            laptopInfo.style.display = 'flex';

            localStorage.setItem('info-page-content', '1')
            localStorage.getItem('count-validation'); localStorage.setItem('info-page-line', '1')

            employeeLine.style.display = 'none';
            laptopLine.style.display = 'flex';

        }
    })
}

showLaptopInfo();


const navigator = () => {

    if (employeeInfo.style.display === 'flex') {

        backArrowContainerEmployee.style.display = 'flex';
        backArrowContainerLaptop.style.display = 'none';

        if (window.matchMedia('screen and (max-width: 768px)').matches) {
            if (localStorage.getItem('info-page-content') === '0') {

                header.style.background = '#F6F6F6 url(../icon/employee-info-icon.png)';
            }

        } else {
            header.style.background = 'none';

        }
        window.addEventListener('resize', () => {
            if (window.matchMedia('screen and (max-width: 768px)').matches) {
                if (localStorage.getItem('info-page-content') === '0') {

                    header.style.background = '#F6F6F6 url(../icon/employee-info-icon.png)';
                }

            } else {
                header.style.background = 'none';

            }

        });

    }



    backArrowIconEmployee.addEventListener('click', () => {

        window.location.href = './index.html';
    })
}

navigator()