window.onload = function () {
  // 5초 후에 슬라이드 컨테이너가 보이도록 설정
  setTimeout(function () {
    const slideContainer = document.querySelector(".slide-area");
    slideContainer.style.visibility = "visible";
    slideContainer.style.opacity = "1";
    slideContainer.style.transition = "opacity 0.4s ease";
  }, 4200); // 5000ms = 5초

  setTimeout(function () {
    const image = document.querySelector(".character"); // 이미지의 클래스명을 지정
    image.style.display = "none";
  }, 4000); // 5000ms = 5초

  // ===메인 배너 스와이퍼 슬라이드 영역 시작
  const swPromotion = new Swiper(".swPromotion", {
    loop: false,
    autoplay: { delay: 0 },
    speed: 3000,
    freeMode: true, // 자유 모드 활성화, 슬라이드가 자연스럽게 이동
    freeModeMomentum: true, // 관성 모드 활성화로 부드러운 움직임
    freeModeMomentumRatio: 0.5, // 관성 효과의 강도 조절
    slidesPerView: 2,
    spaceBetween: 30,
    breakpoints: {
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
  // ===메인 배너 슬라이드 영역 끝

  // ===프로덕트 슬라이드 영역 시작
  const swProduct = new Swiper(".swProduct", {
    loop: true,
    slidesPerView: 2,
    centeredSlides: true,
    direction: "vertical",
    autoplay: { delay: 1 },
    speed: 5000,
    // spaceBetween: 250,
    breakpoints: {
      // 화면 너비가 320px 이상일 때
      320: {
        slidesPerView: 4,
        direction: "horizontal",
        centeredSlides: false,  // horizontal에서는 슬라이드를 가운데 정렬하지 않음
        spaceBetween: 10,       // 슬라이드 간의 간격을 설정
      },
      // 화면 너비가 480px 이상일 때
      480: {
        slidesPerView: 4,
        direction: "horizontal",
        centeredSlides: false,
        spaceBetween: 15,       // 적절한 간격으로 설정
      },
      700: {
        slidesPerView: 2,
        direction: "vertical",
      },
      730: {
        slidesPerView: 2,
      },
      900: {
        slidesPerView: 2.5,
      },
      // 화면 너비가 1024px 이상일 때
      1024: {
        slidesPerView: 2.5,
      },
      // 화면 너비가 1024px 이상일 때
      1100: {
        slidesPerView: 2.5,
      },
      // 화면 너비가 1200px 이상일 때
      1200: {
        slidesPerView: 2.5,
      },
    },
  });



  // ===프로덕트 슬라이드 영역 끝

  //==프로덕트 슬라이드 클릭시 제품 나오는 코드
  // 제품 클릭 시 설명 표시
  const descriptions = document.querySelectorAll(".product-list"); // 모든 설명란 요소 선택

  const pintClick = document.querySelector(".click_pint");
  const pintDesc = document.querySelector(".pint");

  pintClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    pintDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });

  const chocobarClick = document.querySelector(".click_chocobar");
  const chocobarDesc = document.querySelector(".chocobar");

  chocobarClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    chocobarDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });

  const melonbarClick = document.querySelector(".click_melonbar");
  const melonbarDesc = document.querySelector(".melonbar");

  melonbarClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    melonbarDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });

  const sandClick = document.querySelector(".click_sand");
  const sandDesc = document.querySelector(".sand");

  sandClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    sandDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });

  const monakaClick = document.querySelector(".click_monaka");
  const monakaDesc = document.querySelector(".monaka");

  monakaClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    monakaDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });

  const shakeClick = document.querySelector(".click_shake");
  const shakeDesc = document.querySelector(".shake");

  shakeClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    shakeDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });
  const coffeeClick = document.querySelector(".click_coffee");
  const coffeeDesc = document.querySelector(".coffee");

  coffeeClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    coffeeDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });
  const milkClick = document.querySelector(".click_milk");
  const milkDesc = document.querySelector(".milk");

  milkClick.addEventListener("click", function (e) {
    e.preventDefault();
    descriptions.forEach((desc) => (desc.style.display = "none")); // 모든 설명란 숨기기
    milkDesc.style.display = "flex"; // 클릭된 설명란만 표시
  });


};

//========슬라이드 클릭 제품 설명 영역 끝

//======flavor 버튼

const menu_pintB = querySelector(".menu-pint");
const menu_chocobarB = querySelector(".menu-pint");
const menu_sandB = querySelector(".menu-sand");
const menu_monakaB = querySelector(".menu-monaka");
const menu_shakeB = querySelector(".menu-shake");
const menu_coffeeB = querySelector(".menu-coffee");

menu_pintB.addEventListener("click", function () {
  //  $(".img01").style.display = "none"
  //  $(".img02").style.display = "block"
});
