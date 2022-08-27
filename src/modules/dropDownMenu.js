function dropDownMenu(taskHeader) {
    taskHeader.addEventListener('click', dropMenu);
    
    function dropMenu(event) {
        event.preventDefault();
        
        const openMenu = event.target.closest('.trello-card__option');
        const listMenu = taskHeader.querySelector('.trello-card__list');
    
        if (!openMenu) return;
    
        if (!taskHeader.contains(openMenu)) return;
    
        listMenu.classList.toggle('open');

        document.body.addEventListener('click', event => {
            if (!taskHeader.contains(event.target)) {
                listMenu.classList.remove('open');
            }
        });

        listMenu.addEventListener('click', deleteBoard);

        function deleteBoard(event) {
            const deleteBoard = event.target.closest('.trello-card__delete');

            if (!deleteBoard) return;
    
            if (!listMenu.contains(deleteBoard)) return;

            listMenu.closest('.trello__list').remove();
        }
    }
}

export default dropDownMenu;