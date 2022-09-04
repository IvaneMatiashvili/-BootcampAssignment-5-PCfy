const entriesListMainSection = document.querySelector('.entries-list-main-section');
const backArrowIcon = document.querySelector('.back-arrow-icon');

let linksArray = new Array();

let userName = new Array();
let userSurname = new Array();
let imgSrc = new Array();
let laptop = new Array();
let id = new Array();
let eachLaptopInfoIndex;
let fullLaptopInfoIndex;

let teamStringValue;
let positionStringValue;
let brandStringValue;


let fullDataUserName = new Array();
let fullDataUserSurname = new Array();
let fullDataTeam = new Array();
let fullDataPosition = new Array();
let fullDataEmail = new Array();
let fullDataPhone = new Array();
let fullDataLaptopName = new Array();
let fullDataImage = new Array();
let fullDataBrand = new Array();
let fullDataCpuName = new Array();
let fullDataCores = new Array();
let fullDataThreads = new Array();
let fullDataRam = new Array();
let fullDataHardDriveType = new Array();
let fullDataState = new Array();
let fullDataPurchaseDate = new Array();
let fullDataPrice = new Array();

const { log: l } = console;

let infoDescriptionData = new Array();

async function getInfoDescriptionData() {
    let response = await fetch('https://pcfy.redberryinternship.ge/api/laptops?token=9dad885aff6e25fbfd4e379aba0c893d');
    let responseData = await response.json();

    if (responseData.data.length === 0) {
        alert('There is no submission yet');
        throw new Error('Empty data');
    }

    infoDescriptionData = responseData.data;


    infoDescriptionData.forEach(el => {
        userName.push(el.user.name);
        userSurname.push(el.user.surname);
        imgSrc.push(`https://pcfy.redberryinternship.ge/${el.laptop.image}`);
        laptop.push(el.laptop.name);
        id.push(el.laptop.id);

    })

    for (eachLaptopInfoIndex = 0; eachLaptopInfoIndex < id.length; eachLaptopInfoIndex++) {

        createEntriesListDescriptionHtmlContent();
    }


    if (document.querySelectorAll('.link').length !== 0) {

        linksArray = document.querySelectorAll('.link');


        for (let i = 0; i < id.length; i++) {
            linksArray[i].addEventListener('click', () => {
                for (fullLaptopInfoIndex = 0; fullLaptopInfoIndex < id.length; fullLaptopInfoIndex++) {
                    if (i === fullLaptopInfoIndex) {

                        getLaptopFullDataById(id[fullLaptopInfoIndex]);

                    }
                }
            })
        }

    }


}


const createEntriesListDescriptionHtmlContent = () => {

    let div = document.createElement('div');

    div.classList.add('data-info-container');
    div.innerHTML = `<img src="${imgSrc[eachLaptopInfoIndex]}" alt="laptop image">
                <ul>
                    <li class="name-container">
                        <p class="name">
                            ${userName[eachLaptopInfoIndex]} ${userSurname[eachLaptopInfoIndex]}
                        </p>

                    </li>
                    <li>
                        <p class="laptop-name">
                            ${laptop[eachLaptopInfoIndex]}
                        </p>
                    </li>
                    <li class="link-container">
                        <a class="link" name="${laptop[eachLaptopInfoIndex]}">
                            მეტის ნახვა
                        </a>
                    </li>
                </ul>`

    entriesListMainSection.appendChild(div);
}


async function getLaptopFullDataById(id) {

    const response = await fetch(`https://pcfy.redberryinternship.ge/api/laptop/${id}?token=9dad885aff6e25fbfd4e379aba0c893d`);
    const responseData = await response.json();

    let eachFullDescription = responseData.data;


    fullDataUserName.push(eachFullDescription.user.name);
    fullDataUserSurname.push(eachFullDescription.user.surname);

    const teamResponse = await fetch('https://pcfy.redberryinternship.ge/api/teams');
    const teamResponseData = await teamResponse.json();
    let teamResult = teamResponseData.data;

    teamResult.forEach(el => {
        if (el.id === eachFullDescription.user.team_id) {

            fullDataTeam.push(el.name);
        }
    })

    const positionResponse = await fetch('https://pcfy.redberryinternship.ge/api/positions');
    const positionResponseData = await positionResponse.json();

    let positionResult = positionResponseData.data;

    positionResult.forEach(el => {
        if (el.id === eachFullDescription.user.position_id) {
            fullDataPosition.push(el.name);
        }
    })

    fullDataEmail.push(eachFullDescription.user.email);
    fullDataPhone.push(eachFullDescription.user.phone_number);
    fullDataLaptopName.push(eachFullDescription.laptop.name);
    fullDataImage.push(`https://pcfy.redberryinternship.ge/${eachFullDescription.laptop.image}`);


    const brandResponse = await fetch('https://pcfy.redberryinternship.ge/api/brands');
    const brandResponseData = await brandResponse.json();

    let laptopBrandResult = brandResponseData.data;

    laptopBrandResult.forEach(el => {
        if (el.id === eachFullDescription.laptop.brand_id) {

            fullDataBrand.push(el.name);

        }
    })

    fullDataCpuName.push(eachFullDescription.laptop.cpu.name);
    fullDataCores.push(eachFullDescription.laptop.cpu.cores);
    fullDataThreads.push(eachFullDescription.laptop.cpu.threads);
    fullDataRam.push(eachFullDescription.laptop.ram);
    fullDataHardDriveType.push(eachFullDescription.laptop.hard_drive_type);
    fullDataState.push(eachFullDescription.laptop.state);
    fullDataPurchaseDate.push(eachFullDescription.laptop.purchase_date);
    fullDataPrice.push(eachFullDescription.laptop.price);

    localStorage.setItem('save-get-laptop-info-page-content', JSON.stringify(`<div class="image-and-employee-info">
                <div class="image-container">

                    <img src="${fullDataImage[0]}" alt="laptop image" />
                </div>
                <div class="information-list">

                    <ul class="description">
                        <li>
                            <p>
                                სახელი:
                            </p>
                        </li>
                        <li>
                            <p>
                                თიმი:
                            </p>
                        </li>
                        <li>
                            <p>
                                პოზიცია:
                            </p>
                        </li>
                        <li>
                            <P>
                                მეილი:
                            <p>
                        </li>
                        <li>
                            <P>
                                ტელ. ნომერი:
                            </P>
                        </li>
                    </ul>
                    <ul>
                        <li>
                            <P>
                                ${fullDataUserName[0]} ${fullDataUserSurname[0]}
                            </P>
                        </li>
                        <li>
                            <p>
                            ${fullDataTeam[0]}
                            </p>
                        </li>
                        <li>
                            <p>
                            ${fullDataPosition[0]}
                            </p>
                        </li>
                        <li>
                            <p>
                            ${fullDataEmail[0]}
                            </p>
                        </li>
                        <li>
                            <p>
                            ${fullDataPhone[0]}
                            </p>
                        </li>

                    </ul>
                </div>
            </div>

            <div class="line">
            </div>

            <div class="laptop-information-container">

                <div class="information-list">

                    <ul class="description">
                        <li>
                            <p>
                                ლეპტოპის სახელი:
                            </p>
                        </li>
                        <li>
                            <p>
                                ლეპტოპის ბრენდი:
                            </p>
                        </li>
                        <li>
                            <p>
                                RAM:
                            </p>
                        </li>
                        <li>
                            <P>
                                მეხსიერების ტიპი:
                            <p>
                        </li>
                    </ul>
                    <ul class="values increase-ram-values-padding">
                        <li>
                            <P>
                                ${fullDataLaptopName[0]}
                            </P>
                        </li>
                        <li>
                            <p>
                                ${fullDataBrand[0]}
                            </p>
                        </li>
                        <li>
                            <p>
                                ${fullDataRam[0]}
                            </p>
                        </li>
                        <li>
                            <p>
                                ${fullDataHardDriveType[0]}
                            </p>
                        </li>

                    </ul>
                </div>
                <div class="information-list ram-memory">

                    <ul class="description">
                        <li>
                            <p>
                                CPU:
                            </p>
                        </li>
                        <li>
                            <p>
                                CPU-ს ბირთვი:
                            </p>
                        </li>
                        <li>
                            <p>
                                CPU-ს ნაკადი:
                            </p>
                        </li>
                    </ul>
                    <ul class="values cpu">
                        <li>
                            <P>
                                ${fullDataCpuName[0]}
                            </P>
                        </li>
                        <li>
                            <p>
                                ${fullDataCores[0]}
                            </p>
                        </li>
                        <li>
                            <p>
                                ${fullDataThreads[0]}
                            </p>
                        </li>

                    </ul>
                </div>
            </div>
            </div>

            <div class="line">
            </div>
            <div class="laptop-information-container">

                <div class="information-list">

                    <ul class="description laptop-status">
                        <li>
                            <p>
                                ლეპტოპის მდგომარეობა:
                            </p>
                        </li>
                        <li>
                            <p>
                                ლეპტოპის ფასი:
                            </p>
                        </li>
                    </ul>
                    <ul class="values increase-ram-values-padding laptop-status-li">
                        <li>
                            <P>
                                ${fullDataState[0]}
                            </P>
                        </li>
                        <li>
                            <p>
                                ${fullDataPrice[0]}
                            </p>
                        </li>
                    </ul>
                </div>
                <div class="information-list ram-memory">

                    <ul class="description">
                        <li>
                            <p>
                                შეძენის რიცხვი:
                            </p>
                        </li>
                    </ul>
                    <ul class="values cpu">
                        <li>
                            <P>
                                ${fullDataPurchaseDate[0]}
                            </P>
                        </li>

                    </ul>
                </div>
            </div>`));

    window.location.href = './get-laptop-info.html';
}


getInfoDescriptionData();



const navigator = () => {

        backArrowIcon.addEventListener('click', () => {

            window.location.href = localStorage.getItem('to-entries-list-page');
        })
}

navigator()