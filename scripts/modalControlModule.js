import {btnModal, checked, checkedDiscount, modal, overlay, table} from "./elementsDOMmodule.js";


export const modalControl = () => {
  btnModal.addEventListener('click', () => {
    overlay.classList.add('is-visible');
  });

  modal.addEventListener('click', e => {
    if (checked.checked) {
      checkedDiscount.disabled = false;
    } else {
      checkedDiscount.disabled = true;
      checkedDiscount.value = '';
    }
  });
};


export const closeFormModal = () => {
  overlay.addEventListener('click', e => {
    const target = e.target;
    if (target === overlay || target.closest('.form__close')) {
      overlay.classList.remove('is-visible');
    }
  });
};
