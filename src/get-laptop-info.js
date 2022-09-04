const addLaptopInfo = document.querySelector('.add-laptop-info');
const backArrowIconFromGetLaptopInfo = document.querySelector('.back-arrow-icon-from-get-laptop-info');



const createLaptopInfoHtmlContent = () => {
    let section = document.createElement('section');

    section.classList.add('get-laptop-info-main');

    section.innerHTML = JSON.parse(localStorage.getItem('save-get-laptop-info-page-content'));


    addLaptopInfo.appendChild(section);

}

createLaptopInfoHtmlContent();


const navigator = () => {
    if (backArrowIconFromGetLaptopInfo) {

        backArrowIconFromGetLaptopInfo.addEventListener('click', () => {

            window.location.href = './entries-list-page.html';
        })
    }
}

navigator()