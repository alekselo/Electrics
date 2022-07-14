const smoothAnchor = () => {
  const anchors = document.querySelectorAll("a.scroll-to");
  console.log(anchors);
  anchors.forEach((item) => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      const blockId = item.getAttribute("href");

      document.querySelector(blockId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    });
  });
};

export default smoothAnchor;
