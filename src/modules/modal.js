// const modal = document.querySelector('.modal');

// export function openModal(event, taskBody) {

//     const openModalBtn = event.target.closest('.trello-card__edit');

//     if (!openModalBtn) return;

//     if (!taskBody.contains(openModalBtn)) return;

//     modal.classList.add('modal__show');

//     modal.innerHTML = `
//         <div class="modal__container">
//             <div class="modal__content">
//                 <a href="#" class="modal__close">
//                     <img src="${close}" alt="close">
//                 </a>
//                 <div class="modal__header">
//                     <textarea class="modal__textarea auto-resize">${openModalBtn.previousElementSibling.textContent}</textarea>
//                     <div class="modal__col">В колонке</div>
//                 </div>
//             </div>
//         </div>
//     `;

//     console.log(openModalBtn.previousElementSibling);

//     const closeModalBtn = document.querySelector('.modal__close');
//     closeModalBtn.addEventListener('click', () => closeModal());
//     textareaValue.addEventListener('change', changeValue);

//     function changeValue() {
//         openModalBtn.previousElementSibling.textContent = textareaValue.value;
//     }
// }

// function closeModal() {
//     modal.classList.remove('modal__show');
// }

// window.addEventListener("click", (e) => {
//     if (e.target === modal) {
//       closeModal();
//     }
// });

// window.addEventListener("keydown", (e) => {
//     if (e.keyCode === 27) {
//       closeModal();
//     }
// });