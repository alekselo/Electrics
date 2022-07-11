const slider = () => {
  const slides = document.querySelectorAll(".item");
  const slideText = document.querySelectorAll(".table");
  const timeInterval = 3000;
  let currentSlide = 0;

  const prevSlide = (elems, index, strClass) => {
    elems[index].classList.remove(strClass);
  };
  const nextSlide = (elems, index, strClass) => {
    elems[index].classList.add(strClass);
  };

  const autoSlide = () => {
    prevSlide(slides, currentSlide, "item-active");
    prevSlide(slideText, currentSlide, "active");
    currentSlide++;

    if (currentSlide >= slides.length) {
      currentSlide = 0;
    }
    nextSlide(slides, currentSlide, "item-active");
    nextSlide(slideText, currentSlide, "active");
  };
  const startSlide = (timer = 1500) => {
    setInterval(autoSlide, timer);
  };

  startSlide(timeInterval);
};

export default slider;
