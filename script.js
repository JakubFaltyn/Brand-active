const sliderBig = new Swiper('.swiper--big', {
    loop: true,
  
  
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  const sliderSmall = new Swiper('.swiper--small', {
    direction: 'horizontal',
    loop: true,

    slidesPerView: 3,
    spaceBetween: 24,

    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });