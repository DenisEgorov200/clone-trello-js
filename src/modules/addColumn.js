export const addColumnBtn = document.getElementById('addColumn');
const container = document.querySelector('.trello__left');

addColumnBtn.addEventListener('click', addColumn);

function addColumn() {
    container.innerHTML += `
    
    `;

    container.insertAdjacentHTML('afterend',
        `
        <ul class="trello__list">
            <li class="trello__item trello-card">
                <div class="trello-card__header">
                    <textarea class="trello-card__title" placeholder="Ввести заголовок списка">Нужно сделать</textarea>
                    <div class="trello-card__option">...</div>
                </div>
                <div class="trello-card__body">
                    <div class="trello-card__row" draggable="true">
                        <p>Сделать клон trello</p>
                        <div class="trello-card__edit">
                            Edit
                        </div>
                    </div>
                    <div class="trello-card__row" draggable="true">
                        <p>Сделать клон trello</p>
                        <div class="trello-card__edit">
                            Edit
                        </div>
                    </div>
                    <div class="trello-card__row" draggable="true">
                        <p>Сделать клон trello</p>
                        <div class="trello-card__edit">
                            Edit
                        </div>
                    </div>
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
}