import { dragNdrop } from './dragAndDrop';

export function addTask(taskFooter, taskBody, taskContainer, textareaValue) {
    taskFooter.addEventListener('click', addBtnTask);
    taskFooter.addEventListener('click', removeBtnTask);
    taskFooter.addEventListener('click', addTaskRow);

    function addTaskRow(event) {
        const addTaskBtn = event.target.closest('.trello-card__footer').querySelector('.trello-card__btn');
        const addTask = event.target.closest('.trello-card__add');
    
        if (!addTask) return;

        if (!taskFooter.contains(addTask)) return;

        taskBody.insertAdjacentHTML('beforeend', 
            `
            <div class="trello-card__row" draggable="true">
                <p>${textareaValue.value}</p>
            </div>
            `
        );
        
        addTask.style.display = 'none';
        textareaValue.value = '';
            
        dragNdrop();
    }

    function addBtnTask(event) {
        const addTask = event.target.closest('.trello-card__footer').querySelector('.trello-card__add');
        const addTaskBtn = event.target.closest('.trello-card__btn');

        if (!addTaskBtn) return;

        if (!taskFooter.contains(addTaskBtn)) return;

        taskContainer.style.display = 'block';
        addTaskBtn.style.display = 'none';

        textareaValue.addEventListener('input', e => {
            if (textareaValue.value) {
                addTask.style.display = 'inline-block';
            } else {
                addTask.style.display = 'none';
            }
        });
    }
    
    function removeBtnTask(event) {
        const addTaskBtn = event.target.closest('.trello-card__footer').querySelector('.trello-card__btn');
        const addTask = event.target.closest('.trello-card__footer').querySelector('.trello-card__add');
        const removeTaskBtn = event.target.closest('.trello-card__cancel');

        if (!removeTaskBtn) return;

        if (!taskFooter.contains(removeTaskBtn)) return;

        taskContainer.style.display = 'none';
        addTaskBtn.style.display = 'block';
        addTask.style.display = 'none';
        textareaValue.value = '';
    }
}