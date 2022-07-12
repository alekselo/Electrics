const faq = () => {
  const elem = document.querySelectorAll(".accordeon .element");

  elem.forEach((item) => {
    const contentItems = item.querySelector(".element-content");
    item.addEventListener("click", () => {
      if (item.classList.contains("active")) {
        item.classList.remove("active");
        contentItems.style.display = "none";
      } else {
        elem.forEach((item) => {
          item.classList.remove("active");
          item.querySelector(".element-content").style.display = "none";
        });
        item.classList.add("active");
        contentItems.style.display = "block";
      }
    });
  });
};

export default faq;
