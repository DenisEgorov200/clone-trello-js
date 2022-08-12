export const addColumnBtn = document.getElementById('addColumn');
const container = document.querySelector('.trello__left');
export const input = document.querySelector('.trello-add__input');

addColumnBtn.addEventListener('click', addColumn);

export function addColumn(e) {
    e.preventDefault();

    container.insertAdjacentHTML('beforeend',
        `
        <ul class="trello__list">
            <li class="trello__item trello-card">
                <div class="trello-card__header">
                    <textarea class="trello-card__title auto-resize" placeholder="Ввести заголовок списка">${input.value}</textarea>
                    <div class="trello-card__option">...</div>
                </div>
                <div class="trello-card__body">
                    
                </div>
                <div class="trello-card__footer">
                    <button class="trello-card__add">
                        <span class="trello-card__icon">+</span>
                        <span>Добавить карточку</span>
                        <div class="trello-card__sample"></div>
                    </button>
                </div>
            </li>
        </ul>
        `
    );

    input.value = '';
}