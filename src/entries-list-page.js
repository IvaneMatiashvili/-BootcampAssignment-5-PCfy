const mainSection = document.querySelector('.main-section');

let userName = new Array();
let userSurname = new Array();
let imgSrc = new Array();
let laptop = new Array();
let id = new Array();
let eachLaptopInfoIndex;

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


}

getInfoDescriptionData();

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
                        <a class="link">
                            მეტის ნახვა
                        </a>
                    </li>
                </ul>`

    mainSection.appendChild(div);
}