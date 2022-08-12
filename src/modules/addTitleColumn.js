export const openBtns = document.querySelectorAll('.open-composer');
export const container = document.querySelector('.trello__container');
const closeBtns = document.querySelectorAll('.close-composer');
// const form = document.querySelector('.composer');

openBtns.forEach(openBtn => {
    openBtn.addEventListener('click', event => {
        const isIdle = event.target.closest('.composer');
    
        if (!isIdle) return;
    
        if (!container.contains(isIdle)) return;
    
        if (isIdle.classList.contains('is-idle')) {
            isIdle.classList.remove('is-idle');
            openBtn.style.display = 'none';
        } else {
            isIdle.classList.add('is-idle');
            openBtn.style.display = 'block';
        }

        // isIdle.classList.remove('is-idle');
        // openBtn.style.display = 'none';


        closeBtns.forEach(closeBtn => {
            closeBtn.addEventListener('click', event => {
                const isIdle = event.target.closest('.composer');
            
                if (!isIdle) return;
            
                if (!container.contains(isIdle)) return;
        
                isIdle.classList.add('is-idle');
                openBtn.style.display = 'block';
            });
        });
    });
});





// function examination(event) {

// }

// function examination(event) {
//     const isIdle = event.target.closest('.composer');

//     console.log(isIdle);
// }