const sendForms = () => {
  const form = document.getElementById("callback_message");
  const formElements = form.querySelectorAll("input");
  const statusBlock = document.createElement("div");
  const loadText = "Загрузка...";
  const errorText = "Ошибка! Введите корректные данные!";
  const successText = "Спасибо! Наш менеджер с Вами свяжется!";
  const regUserName = /^[а-яА-ЯёЁ]{2,}$/;
  const regUserPhone = /^[\d\+][\d\(\)\ -]{4,14}\d$/;

  const errorMessage = () => {
    statusBlock.classList.add("black");
    statusBlock.textContent = errorText;
    form.append(statusBlock);
    setTimeout(() => {
      statusBlock.textContent = "";
    }, 3000);
  };

  formElements.forEach((input) => {
    input.addEventListener("invalid", (e) => {
      e.preventDefault();
      input.classList.add("error");
      errorMessage();
    });
  });

  formElements.forEach((input) => {
    input.addEventListener("input", (e) => {
      e.preventDefault();

      if (input.name === "fio") {
        if (regUserName.test(input.value)) {
          input.classList.remove("error");
        }
      }
      if (input.name === "tel") {
        if (regUserPhone.test(input.value)) {
          input.classList.remove("error");
        }
      }
    });
  });
  const validate = () => {
    let success = true;

    formElements.forEach((input) => {
      if (input.name === "fio") {
        if (!regUserName.test(input.value)) {
          input.classList.add("error");
        }
      }
      if (input.name === "tel") {
        if (!regUserPhone.test(input.value)) {
          input.classList.add("error");
        }
      }
      if (input.classList.contains("error")) {
        success = false;
      }
    });

    return success;
  };
  const sendData = (data) => {
    return fetch("server.php", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
  };
  const submitForm = () => {
    const formData = new FormData(form);
    const formBody = {};

    formData.forEach((val, key) => {
      formBody[key] = val;
    });
    statusBlock.classList.add("white");
    statusBlock.textContent = loadText;
    form.append(statusBlock);

    if (validate(formElements)) {
      sendData(formBody)
        .then((data) => {
          statusBlock.textContent = successText;
          formElements.forEach((input) => {
            input.value = "";

            setTimeout(() => {
              statusBlock.textContent = "";
            }, 3000);
          });
        })
        .catch((error) => {
          statusBlock.textContent = errorText;
          setTimeout(() => {
            statusBlock.textContent = "";
          }, 3000);
        });
    } else {
      formElements.forEach((input) => {});
    }
  };
  try {
    if (!form) {
      throw new Error("Верните форму на место");
    }
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (validate(formElements)) {
        submitForm();
      } else {
        errorMessage();
      }
    });
  } catch (error) {
    console.log(error.message);
  }
};

export default sendForms;
