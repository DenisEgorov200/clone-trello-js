import dragNdrop from './dragAndDrop';
import edit from '../img/edit.svg';
import close from '../img/close.svg';

function addTask(list) {
    const taskFooter = list.querySelector('.trello-card__footer');
    const taskContainer = list.querySelector('.trello-card__container');
    const taskBody = list.querySelector('.trello-card__body');
    const taskTitle = list.querySelector('.trello-card__title');
    const textareaValue = list.querySelector('.trello-card__textarea');

    taskFooter.addEventListener('click', addBtnTask);
    taskFooter.addEventListener('click', removeBtnTask);
    taskFooter.addEventListener('click', addTaskRow);
    taskBody.addEventListener('click', openModal);

    function addTaskRow(event) {
        const addTask = event.target.closest('.trello-card__add');
    
        if (!addTask) return;

        if (!taskFooter.contains(addTask)) return;

        taskBody.insertAdjacentHTML('beforeend', 
            `
            <div class="trello-card__row" draggable="true">
                <p>${textareaValue.value}</p>
                <a href="#" class="trello-card__edit">
                    <img src="${edit}" alt="edit">
                </a>  
            </div>
            `
        );
        
        addTask.style.display = 'none';
        textareaValue.value = '';
            
        dragNdrop();
    }

    function addBtnTask(event) {
        const addTask = taskFooter.querySelector('.trello-card__add');
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
        const addTaskBtn = taskFooter.querySelector('.trello-card__btn');
        const addTask = taskFooter.querySelector('.trello-card__add');
        const removeTaskBtn = event.target.closest('.trello-card__cancel');

        if (!removeTaskBtn) return;

        if (!taskFooter.contains(removeTaskBtn)) return;

        taskContainer.style.display = 'none';
        addTaskBtn.style.display = 'block';
        addTask.style.display = 'none';
        textareaValue.value = '';
    }

    const modal = document.querySelector('.modal');

    function openModal(event) {
        event.preventDefault();
    
        const openModalBtn = event.target.closest('.trello-card__edit');
    
        if (!openModalBtn) return;
    
        if (!taskBody.contains(openModalBtn)) return;
    
        modal.classList.add('modal__show');
    
        modal.innerHTML = `
            <div class="modal__container">
                <div class="modal__content">
                    <a href="#" class="modal__close">
                        <img src="${close}" alt="close">
                    </a>
                    <div class="modal__header">
                        <textarea class="modal__textarea auto-resize">${openModalBtn.previousElementSibling.textContent}</textarea>
                        <div class="modal__col">В колонке ${taskTitle.value}</div>
                    </div>
                    <div class="modal__footer">
                        <button class="modal__delete btn btn-red">Удалить</button>
                    </div>
                </div>
            </div>
        `;
    
        const textarea = modal.querySelector('textarea');
    
        const closeModalBtn = document.querySelector('.modal__close');
        closeModalBtn.addEventListener('click', () => closeModal());
        textarea.addEventListener('change', changeValue);
    
        function changeValue() {
            openModalBtn.previousElementSibling.textContent = textarea.value;
        }

        modal.addEventListener('click', deleteTaskRow);

        function deleteTaskRow(event) {
            const deleteTask = event.target.closest('.modal__delete');
        
            if (!deleteTask) return;
    
            if (!modal.contains(deleteTask)) return;
    
            deleteRow();
            closeModal();
        }
    
        function deleteRow() {
            openModalBtn.parentNode.remove();
        }
    }

    function closeModal() {
        modal.classList.remove('modal__show');
    }
    
    window.addEventListener("click", (e) => {
        if (e.target === modal) {
          closeModal();
        }
    });
    
    window.addEventListener("keydown", (e) => {
        if (e.keyCode === 27) {
          closeModal();
        }
    });
}

export default addTask;