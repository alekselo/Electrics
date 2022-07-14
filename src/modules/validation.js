const validation = () => {
  const nameInput = document.querySelectorAll('input[name="fio"]');
  const phoneInput = document.querySelectorAll('input[name="tel"]');

  const userNameValidation = () => {
    nameInput.forEach((item) => {
      item.addEventListener("input", (elem) => {
        elem.target.value = elem.target.value.replace(/[^а-яА-ЯёЁ\-\s+]/gi, "");
      });
    });
    nameInput.forEach((item) => {
      item.addEventListener("blur", (elem) => {
        elem.target.value = elem.target.value.replace(/^[\s\-]+|[\s\-]+$/g, "");
        elem.target.value = elem.target.value.replace(/\s{2,}/g, " ");
        elem.target.value = elem.target.value.replace(/\-{2,}/g, "-");
        elem.target.value = elem.target.value.replace(
          /( |^)[а-яё]/g,
          function (e) {
            return e.toUpperCase();
          }
        );
      });
    });
  };

  const userPhoneValidation = () => {
    phoneInput.forEach((item) => {
      item.addEventListener("input", (elem) => {
        elem.target.value = elem.target.value.replace(/[^0-9\+]/g, "");
      });
    });
    phoneInput.forEach((item) => {
      item.addEventListener("blur", (elem) => {
        elem.target.value = elem.target.value.replace(/--+/g, "-");
        elem.target.value = elem.target.value.replace(/^\-|\-{2,}|\-$/g, "");
      });
    });
  };

  userNameValidation();
  userPhoneValidation();
};

export default validation;
