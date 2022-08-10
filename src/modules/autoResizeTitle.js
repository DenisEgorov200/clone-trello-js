const autoResizeTitles = document.querySelectorAll('.trello-card__title');

autoResizeTitles.forEach(autoResizeTitle => {
    autoResizeTitle.addEventListener('keyup', e => {
        autoResizeTitle.style.height = 'auto';
        let scHeight = e.target.scrollHeight;
        autoResizeTitle.style.height = `${scHeight}px`;
    });
});