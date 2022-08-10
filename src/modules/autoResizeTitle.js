// export const autoResizeTitles = document.querySelectorAll('.trello-card__title');

// autoResizeTitles.forEach(autoResizeTitle => {
//     autoResizeTitle.addEventListener('keyup', e => {
//         autoResizeTitle.style.height = 'auto';
//         let scHeight = e.target.scrollHeight;
//         autoResizeTitle.style.height = `${scHeight}px`;
//     });
// });

export const container = document.querySelector('.trello__container');

container.addEventListener('keyup', function(event) {
    const autoResizeTitle = event.target.closest('.trello-card__title');

    if (!autoResizeTitle) return;

    if (!container.contains(autoResizeTitle)) return;

    autoResizeTitle.style.height = 'auto';
    let scHeight = event.target.scrollHeight;
    autoResizeTitle.style.height = `${scHeight}px`;
});