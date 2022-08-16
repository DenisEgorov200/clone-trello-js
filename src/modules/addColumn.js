export const addColumnBtn = document.getElementById('addColumn');
const container = document.querySelector('.trello__left');
const inputColumn = document.querySelector('.trello-add__input');

addColumnBtn.addEventListener('click', addColumn);

export function addColumn() {
    if (inputColumn.value.length > 0) {
        container.insertAdjacentHTML('beforeend',
        `
        <ul class="trello__list">
            <li class="trello__item trello-card">
                <div class="trello-card__header">
                    <textarea class="trello-card__title auto-resize" placeholder="Ввести заголовок списка" maxlength="150">${inputColumn.value}</textarea>
                    <div class="trello-card__option">...</div>
                </div>
                <div class="trello-card__body">
                </div>
                <div class="trello-card__footer">
                    <div class="trello-card__container">
                        <textarea class="trello-card__textarea auto-resize" maxlength="150"></textarea>
                        <div class="trello-card__controls">
                            <button class="trello-card__append">Добавить карточку</button>
                            <button class="trello-card__close">x</button>
                        </div>
                    </div>
                </div>
            </li>
        </ul>
            `
        );
    }

    inputColumn.value = '';
}