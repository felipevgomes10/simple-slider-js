const slider = (function () {
  const thumbList = document.querySelectorAll(".js-thumb-list div");

  if (thumbList.length) {
    thumbList[0].classList.add("active");

    function slider(index) {
      thumbList.forEach((img) => {
        img.classList.remove("active");
      });
      thumbList[index].classList.add("active");
      const img = document.querySelector(".slider__img");
      img.setAttribute("src", "img/hotel-" + index + ".jpg");
    }

    thumbList.forEach((img, index) => {
      img.addEventListener("click", () => {
        slider(index);
      });
    });
  }
})();
