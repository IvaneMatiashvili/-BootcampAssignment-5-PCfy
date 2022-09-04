const addRecordBtn = document.querySelector('.add-record-btn');
const recordListBtn = document.querySelector('.record-list-btn');

addRecordBtn.addEventListener('click', () => {
    localStorage.setItem('from-first-page-to-info-page', 'true');
})

recordListBtn.addEventListener('click', () => {
    localStorage.setItem('to-entries-list-page', './index.html');
})