const carousel = document.querySelector('.flex-carousel')

if(carousel){
    setInterval(changeOrder, carousel.dataset.interval);
}


function changeOrder() {
  const allSlides = document.querySelectorAll(".flex-carousel-item");
  const previous = "1";
  const current = "2";
  const next = "3";

  for (const slide of allSlides) {
    const order = slide.getAttribute("data-order");

    switch (order) {
      case current:
        slide.setAttribute("data-order", previous);
        break;
      case next:
        slide.setAttribute("data-order", current);
        break;
      case previous:
        slide.setAttribute("data-order", next);
        break;
    }
  }
}