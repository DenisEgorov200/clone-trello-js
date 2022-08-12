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
    const autoResize = event.target.closest('.auto-resize');

    if (!autoResize) return;

    if (!container.contains(autoResize)) return;

    autoResize.style.height = 'auto';
    let scHeight = event.target.scrollHeight;
    autoResize.style.height = `${scHeight}px`;
});