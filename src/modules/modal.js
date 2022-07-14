import { animate } from "./helpers";

const modal = () => {
  const modal = document.querySelector(".popup");
  const buttons = document.querySelectorAll(".popup-btn");
  const modalOverlay = document.querySelector(".modal-overlay");

  buttons.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      if (document.documentElement.offsetWidth > 768) {
        modal.style.display = "block";
        modalOverlay.style.display = "block";
        animate({
          duration: 350,
          timing(timeFraction) {
            return timeFraction;
          },
          draw(progress) {
            modal.style.opacity = 100 * progress + "%";
          },
        });
      } else {
        modal.style.display = "block";
      }
    });
  });

  addEventListener("click", (e) => {
    if (
      e.target.closest(".modal-overlay") ||
      e.target.closest(".modal-close")
    ) {
      modal.style.display = "none";
      modalOverlay.style.display = "none";
    }
  });
};
export default modal;
