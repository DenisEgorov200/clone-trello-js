export const addCardBtn = document.querySelectorAll('.trello-card__add');
const container = document.querySelector('.trello-card__body');

addCardBtn.forEach(btn => {
    btn.addEventListener('click', addCardColumn);
});

export function addCardColumn() {
    container.insertAdjacentHTML('afterbegin',
        `
        <div class="trello-card__row" draggable="true">
            <p>Сделать клон trello</p>
            <div class="trello-card__edit">
                Edit
            </div>
        </div>
        `
    );
}