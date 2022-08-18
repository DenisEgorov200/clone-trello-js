import { dragNdrop } from './dragAndDrop';
// import { toggleBtnTask } from './toggleBtnTask';
import { addTask } from './addTask';

export const addBoardBtn = document.getElementById('addBoard');
const container = document.querySelector('.trello__container');

addBoardBtn.addEventListener('click', addBoard);

export function addBoard(event) {
    const list = document.createElement('ul');
    list.classList.add('trello__list');
    list.insertAdjacentHTML('beforeend',
    `
        <li class="trello__item trello-card">
            <div class="trello-card__header">
                <textarea class="trello-card__title auto-resize" placeholder="Ввести заголовок списка" maxlength="150"></textarea>
                <div class="trello-card__option">...</div>
            </div>
            <div class="trello-card__body">
            </div>
            <div class="trello-card__footer">
                <div class="trello-card__container">
                    <textarea class="trello-card__textarea auto-resize" maxlength="150"></textarea>
                    <div class="trello-card__controls">
                        <button class="trello-card__add">Добавить карточку</button>
                        <button class="trello-card__cancel">Отмена</button>
                    </div>
                </div>
                <button class="trello-card__btn">
                    <span>+</span>
                    Добавить карточку
                </button>
            </div>
        </li>
    `
    );
    container.append(list);

    const taskFooter = list.querySelector('.trello-card__footer');
    const taskContainer = list.querySelector('.trello-card__container');
    const taskBody = list.querySelector('.trello-card__body');
    const textareaValue = list.querySelector('.trello-card__textarea');

    addTask(taskFooter, taskBody, taskContainer, textareaValue);
    dragNdrop();
}