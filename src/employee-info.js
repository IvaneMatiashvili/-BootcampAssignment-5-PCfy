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

async function getTeamsData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/teams');
    const responseData = await response.json();
    teamResult = responseData.data;

    teamResult.forEach((elm) => {
        let option = document.createElement('option');
        let node = document.createTextNode(elm.name);

        option.value = elm.name;
        option.appendChild(node);
        team.appendChild(option);
    })


    l(team.value)
    l(teamResult);

    team.addEventListener('input', (e) => (
        l(e.target.value)
    ))
}
getTeamsData();




let positionResult = new Array();

async function getPositionData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/positions');
    const responseData = await response.json();
    positionResult = responseData.data;

    positionResult.forEach((elm) => {
        let option = document.createElement('option');
        let node = document.createTextNode(elm.name);

        option.value = elm.name;
        option.appendChild(node);
        position.appendChild(option);
    })


    l(positionResult);
}
getPositionData();
























const showLaptopInfo = () => {
    nextBtn?.addEventListener('click', () => {
        employeeInfo.style.display = 'none';
        laptopInfo.style.display = 'flex';

        localStorage.setItem('info-page-content', '1')
        localStorage.setItem('info-page-line', '1')

        employeeLine.style.display = 'none';
        laptopLine.style.display = 'flex';
    })

    nextBtnBackgroundContainer?.addEventListener('click', () => {
        employeeInfo.style.display = 'none';
        laptopInfo.style.display = 'flex';

        localStorage.setItem('info-page-content', '1')
        localStorage.setItem('info-page-line', '1')

        employeeLine.style.display = 'none';
        laptopLine.style.display = 'flex';
    })
}

showLaptopInfo();