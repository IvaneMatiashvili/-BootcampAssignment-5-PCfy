const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');

const team = document.querySelector('.team');
const position = document.querySelector('.position');

const nextBtnBackgroundContainer = document.querySelector('.next-btn-background-container');
const nextBtn = document.querySelector('.next-btn');

const { log: l } = console;


let teamResult = new Array();
let teamId = 0;

async function getTeamsData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/teams');
    const responseData = await response.json();
    teamResult = responseData.data;

    teamResult?.forEach((elm) => {
        let option = document.createElement('option');
        let node = document.createTextNode(elm.name);

        option.value = elm.name;
        option.appendChild(node);
        team.appendChild(option);
    })

    team.addEventListener('input', (e) => {
        localStorage.setItem('team', `${team.value}`);
    })

    if (localStorage.getItem('team')) {

        team.value = localStorage.getItem('team');
        position.disabled = false;
    }
}
getTeamsData();




let positionResult = new Array();

async function getPositionData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/positions');
    const responseData = await response.json();
    positionResult = responseData.data;


    filterPositionsData();

    team.addEventListener('input', (e) => {

        filterPositionsData();

    })

}

getPositionData();

const filterPositionsData = () => {

    let teamId = 0;
    position.disabled = false;
    l('some')

    teamResult?.forEach(el => {
        l('some')
        for (let i = 1; i < position.children.length; i++) {
            position.children[i].remove();
        }

        if (team.value === el.name) {
            teamId = el.id;
        }
    })

    positionResult.forEach((elm) => {

        if (teamId === elm.team_id) {

            let option = document.createElement('option');
            let node = document.createTextNode(elm.name);

            option.value = elm.name;
            option.appendChild(node);
            position.appendChild(option);
        }
    })

}





















const showLaptopInfo = () => {
    nextBtn?.addEventListener('click', () => {

        window.location.href = './info-page.html';

        employeeInfo.style.display = 'none';
        laptopInfo.style.display = 'flex';

        localStorage.setItem('info-page-content', '1')
        localStorage.setItem('info-page-line', '1')

        employeeLine.style.display = 'none';
        laptopLine.style.display = 'flex';
    })

    nextBtnBackgroundContainer?.addEventListener('click', () => {
       
        window.location.href = './info-page.html';

        employeeInfo.style.display = 'none';
        laptopInfo.style.display = 'flex';

        localStorage.setItem('info-page-content', '1')
        localStorage.setItem('info-page-line', '1')

        employeeLine.style.display = 'none';
        laptopLine.style.display = 'flex';
    })
}

showLaptopInfo();