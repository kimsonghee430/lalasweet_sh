window.onload = function (){
    // 5초 후에 슬라이드 컨테이너가 보이도록 설정
    setTimeout(function () {
      const slideContainer = document.querySelector(".slide-area");
      slideContainer.style.visibility = "visible";
      slideContainer.style.opacity = "1";
      slideContainer.style.transition = "opacity 0.4s ease"
    }, 4200); // 5000ms = 5초

    setTimeout(function () {
      const image = document.querySelector(".character"); // 이미지의 클래스명을 지정
      image.style.display = "none";
    }, 4000); // 5000ms = 5초

    const swPromotion = new Swiper(".swPromotion", {
        loop: false,
        autoplay: {delay: 0},
        speed: 3000,
        freeMode: true,  // 자유 모드 활성화, 슬라이드가 자연스럽게 이동
        freeModeMomentum: true,  // 관성 모드 활성화로 부드러운 움직임
        freeModeMomentumRatio: 0.5,  // 관성 효과의 강도 조절
    // slidesPerView: 5,
    spaceBetween: 30,
    breakpoints:{
        // 화면 너비가 320px 이상일 때
        320: {
          slidesPerView: 2,
      },
      // 화면 너비가 480px 이상일 때
      480: {
          slidesPerView: 2,
      },
      // 화면 너비가 768px 이상일 때
      730: {
          slidesPerView: 3,
      },
      900: {
          slidesPerView: 4,
      },
      // 화면 너비가 1024px 이상일 때
      1024: {
        slidesPerView: 5,
    },
      // 화면 너비가 1024px 이상일 때
      1100: {
        slidesPerView: 6,
    },
    // 화면 너비가 1200px 이상일 때
    1200: {
        slidesPerView: 7,
    },
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
    //   el: ".swiper-pagination",
      clickable: true,
    },
    });
}