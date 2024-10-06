const formElement = document.querySelector('.policy-form');
const checkPrivacy = formElement.querySelector('#checkbox');
const formButtons = formElement.querySelectorAll('.button');

export default function initFormValidation() {
  if (formElement !== null) {


    checkPrivacy.addEventListener('change', () => {
      const isChecked = checkPrivacy.checked;
      formButtons.forEach(el => {
        el.disabled = !isChecked;
      });
    });

    // Обработка отправки формы
    formElement.addEventListener('submit', (e) => {
      e.preventDefault();
      formButtons.forEach(el => {
        el.disabled = true;
      });

      if (checkPrivacy.checked) {
        formElement.submit();
        formElement.reset();
      }
    });
  }
}