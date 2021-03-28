// 스와이퍼 슬라이더
function fnSwiter(){
  // 스와이퍼 슬라이더
  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    speed:1000,
    effect:'fade',
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    //auto play
    autoplay: {
      delay:15000,
    },
  });
}

