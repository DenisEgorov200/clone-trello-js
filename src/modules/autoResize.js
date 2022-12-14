const container = document.querySelector('.trello__container');

container.addEventListener('keyup', function(event) {
    const autoResize = event.target.closest('.auto-resize');

    if (!autoResize) return;

    if (!container.contains(autoResize)) return;

    autoResize.style.height = 'auto';
    const scHeight = event.target.scrollHeight;
    autoResize.style.height = `${scHeight}px`;
});