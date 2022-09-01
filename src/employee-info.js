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

const onBlurSelectTeam = document.querySelectorAll('.on-blur-select-team');


const nextBtnBackgroundContainer = document.querySelector('.next-btn-background-container');
const nextBtn = document.querySelector('.next-btn');

const { log: l } = console;


let teamResult = new Array();
let teamId = 0;
//localStorage.clear()


const selectBoxGenerator = () => {
    team.style.display = 'none';

    localStorage.setItem('team-select-box-click-counter', '0');
    let teamSelectBoxClickCounter = localStorage.getItem('team-select-box-click-counter');

    selectOptionGenerator(team, selectBoxTeam, teamSelectBoxClickCounter, onBlurSelectTeam);


    //selectOptionGenerator(position, selectBoxPosition);
}



const selectOptionGenerator = (selectBox, selectBoxName, selectBoxClickCounter, customOnBlur) => {

    let boxClickCounter = +selectBoxClickCounter;


    selectBoxName.addEventListener('click', () => {
        team.style.display = 'flex';

        if (boxClickCounter % 2 === 1) {
            selectBox.style.display = 'none';

            customOnBlur?.forEach(elm => {
                elm.style.display = 'none';
            })


        } else {
            selectBox.style.display = 'flex';

            customOnBlur?.forEach(elm => {
                elm.style.display = 'flex';
            })

        }
        boxClickCounter++;


    })

    customOnBlur?.forEach(el => {

        el.addEventListener('click', () => {

            selectBox.style.display = 'none';
            boxClickCounter--;
            customOnBlur?.forEach(elm => {
                elm.style.display = 'none';
            })

        })
    })


}



selectBoxGenerator();

//localStorage.clear()

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
            onBlurSelectTeam?.forEach(elm => {
                elm.style.display = 'none';
            })
            selectOptionGenerator(team, selectBoxTeam, teamSelectBoxClickCounter, onBlurSelectTeam);



            teamName.textContent = elm.name;

            localStorage.setItem('team-open', 'YES');

            localStorage.setItem('team-name', teamName.textContent.trim());
            localStorage.setItem('team-id', `${elm.id}`);

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


                    localStorage.setItem('position-name', teamName.textContent.trim());
                })
            }

        })
    })



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