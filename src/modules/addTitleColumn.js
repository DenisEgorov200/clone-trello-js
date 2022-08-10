const addBtn = document.querySelector('.trello-add__btn');
const closeBtn = document.querySelector('.trello-add__close');
export const input = document.querySelector('.trello-add__input');
const form = document.querySelector('.trello__btn');

addBtn.addEventListener('click', toogleTitleColumn);
closeBtn.addEventListener('click', removeTitleColumn);

function toogleTitleColumn(e) {
    e.preventDefault();
    form.classList.remove('is-idle');
    addBtn.style.display = 'none';
}

function removeTitleColumn(e) {
    e.preventDefault();

    form.classList.add('is-idle');
    addBtn.style.display = 'block';
}