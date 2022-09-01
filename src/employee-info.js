const employeeInfo = document.querySelector('.employee-info');
const laptopInfo = document.querySelector('.laptop-info');

const employeeLine = document.querySelector('.employee-line');
const laptopLine = document.querySelector('.laptop-line');


const selectBoxTeam = document.querySelector('.select-box-team');
const selectBoxPosition = document.querySelector('.select-box-position');

const teamName = document.querySelector('.team-name');
const positionName = document.querySelector('.position-name');


const team = document.querySelector('.team');
const position = document.querySelector('.position');

const onBlurSelectTeam = document.querySelector('.on-blur-select-team');
const onBlurSelectPosition = document.querySelector('.on-blur-select-position');


const nextBtnBackgroundContainer = document.querySelector('.next-btn-background-container');
const nextBtn = document.querySelector('.next-btn');

const { log: l } = console;


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

localStorage.clear()

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

        })

    })

    if (localStorage.getItem('team-name')) {

        teamName.textContent = localStorage.getItem('team-name');
    }

    /*
 
    team.addEventListener('input', (e) => {
        localStorage.setItem('team', `${team.value}`);
        teamResult?.forEach((el) => {
            if (el.name === team.value) {
                localStorage.setItem('team-id', `${el.id}`);
            }
        })
 
 
    })
 
    */
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

                    let positionSelectBoxClickCounter = localStorage.getItem('position-select-box-click-counter');
                    onBlurSelectPosition.style.display = 'none';

                    let positionSiblingElement = selectBoxTeam;
                    selectOptionGenerator(position, selectBoxPosition, positionSelectBoxClickCounter, onBlurSelectPosition, positionSiblingElement);


                    localStorage.setItem('position-name', positionName.textContent.trim());
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