let draggedItem = null;

function dragNdrop() {
    const lists = document.querySelectorAll('.trello-card__body');
    const listItems = document.querySelectorAll('.trello-card__row');

    for (let i = 0; i < listItems.length; i++) {
        const item = listItems[i];

        item.addEventListener('dragstart', () => {
            draggedItem = item;
            setTimeout(() => {
                item.style.display = 'none';
            }, 0);
        });

        item.addEventListener('dragend', () => {
            draggedItem = item;
            setTimeout(() => {
                item.style.display = 'flex';
                draggedItem = null;
            }, 0);
        });

        for (let j = 0; j < lists.length; j++) {
            const list = lists[j];

            list.addEventListener('dragover', e => e.preventDefault());

            list.addEventListener('dragenter', function (e) {
                e.preventDefault();

                this.style.backgroundColor = 'rgba(0,0,0,.3)';
            });

            list.addEventListener('dragleave', function () {
                this.style.backgroundColor = 'rgba(0,0,0, 0)';
            });

            list.addEventListener('drop', function () {
                this.style.backgroundColor = 'rgba(0,0,0, 0)';
                this.append(draggedItem);
            });
        }
    }
}

export default dragNdrop;