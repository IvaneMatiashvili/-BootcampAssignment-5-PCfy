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

        teamResult?.forEach(el => {
            if (e.target.value === el.name) {
                teamId = el.id;
            }
        })
    })
}
getTeamsData();




let positionResult = new Array();

async function getPositionData() {

    const response = await fetch('https://pcfy.redberryinternship.ge/api/positions');
    const responseData = await response.json();
    positionResult = responseData.data;


    filterPositionsData();

}

getPositionData();

const filterPositionsData = () => {
    let teamId = 0;
    team.addEventListener('input', (e) => {

        position.disabled = false;

        teamResult?.forEach(el => {
            for (let i = 1; i < position.children.length; i++) {
                position.children[i].remove();
            }

            if (e.target.value === el.name) {
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

    })

}





















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