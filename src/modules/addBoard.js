import { dragNdrop } from './dragAndDrop';
import { addTask } from './addTask';

export const addBoardBtn = document.getElementById('addBoard');
const container = document.querySelector('.trello__left');
const inputColumn = document.querySelector('.trello-add__input');

addBoardBtn.addEventListener('click', addBoard);

export function addBoard() {
    if (inputColumn.value.length > 0) {
        const list = document.createElement('ul');
        list.classList.add('trello__list');
        list.insertAdjacentHTML('beforeend',
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
                                <button class="trello-card__add">Добавить карточку</button>
                                <button class="trello-card__close">x</button>
                            </div>
                        </div>
                    </div>
                </li>
            </ul>
        `
        );
        container.append(list);

        const taskContainer = list.querySelector('.trello-card__container');
        const taskBody = list.querySelector('.trello-card__body');
        const textareaValue = list.querySelector('.trello-card__textarea');

        addTask(taskContainer, taskBody, textareaValue);
    }

    inputColumn.value = '';

    dragNdrop();
}

addBoard();