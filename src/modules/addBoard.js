import dragNdrop from './dragAndDrop';
import addTask from './addTask';
import dropDownMenu from './dropDownMenu';
import option from '../img/option.svg';

const addBoardBtn = document.getElementById('addBoard');
const container = document.querySelector('.trello__container');

addBoardBtn.addEventListener('click', addBoard);

function addBoard() {
    const list = document.createElement('ul');
    list.classList.add('trello__list');
    list.insertAdjacentHTML('beforeend',
    `
        <li class="trello__item trello-card">
            <div class="trello-card__header">
                <textarea class="trello-card__title auto-resize" placeholder="Ввести заголовок списка" maxlength="150">Заголовок</textarea>
                <div class="trello-card__option">
                    <img src="${option}" alt="option">
                </div>
                <ul class="trello-card__list">
                <li class="trello-card__item">
                    <button class="trello-card__delete btn btn-red">Удалить</button>
                </li>
            </ul>
            </div>
            <div class="trello-card__body"></div>
            <div class="trello-card__footer">
                <div class="trello-card__container">
                    <textarea class="trello-card__textarea auto-resize" maxlength="150"></textarea>
                    <div class="trello-card__controls">
                        <button class="trello-card__add btn btn-blue">Добавить карточку</button>
                        <button class="trello-card__cancel btn btn-red">Отмена</button>
                    </div>
                </div>
                <button class="trello-card__btn btn">
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
    const taskTitle = list.querySelector('.trello-card__title');
    const textareaValue = list.querySelector('.trello-card__textarea');
    const taskHeader = list.querySelector('.trello-card__header');

    addTask(taskFooter, taskBody, taskContainer, textareaValue, taskTitle);
    dropDownMenu(taskHeader);
    dragNdrop();
}

export default addBoard;