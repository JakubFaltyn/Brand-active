const sliderBig = new Swiper('.swiper--big', {
    loop: true,
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const sliderSmall = new Swiper('.swiper--small', {
    loop: true,

    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const sliderQuotes = new Swiper('.swiper--quotes', {
    loop: true,

    slidesPerView: 1,
    spaceBetween: 34,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    breakpoints: {
      720: {
        slidesPerView: 3,
      }
    }
  });