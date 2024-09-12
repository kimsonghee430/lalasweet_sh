window.onload = function () {
  // 5초 후에 슬라이드 컨테이너가 보이도록 설정
  setTimeout(function () {
    const slideContainer = document.querySelector(".slide-area");
    slideContainer.style.visibility = "visible";
    slideContainer.style.opacity = "1";
    slideContainer.style.transition = "opacity 0.4s ease";
  }, 4200); // 5000ms = 5초

  setTimeout(function () {
    const image = document.querySelector(".character"); 
    image.style.display = "none";
  }, 4000);

  // ===메인 배너 스와이퍼 슬라이드 영역 시작
  const swPromotion = new Swiper(".swPromotion", {
    loop: false,
    autoplay: { delay: 0 },
    speed: 3000,
    disableOnInteraction: false,
    freeMode: true, // 자유 모드 활성화, 슬라이드가 자연스럽게 이동
    // freeModeMomentum: true, 
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
        slidesPerView: 3,
      },
      // 화면 너비가 768px 이상일 때
      730: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 3,
      },
      // 화면 너비가 1024px 이상일 때
      950: {
        slidesPerView: 4,
      },
      1024: {
        slidesPerView: 4,
      },
      // 화면 너비가 1024px 이상일 때
      1100: {
        slidesPerView: 5,
      },
      1250: {
        slidesPerView: 5,
      },
      // 화면 너비가 1200px 이상일 때
      1200: {
        slidesPerView: 5,
      },
      1300: {
        slidesPerView: 6,
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
    slidesPerView: 1,
    // centeredSlides: true,
    // direction: "vertical",
    autoplay: { delay: 1 },
    speed: 5000,
    spaceBetween: 20,
    breakpoints: {
      // 화면 너비가 320px 이상일 때
      320: {
        slidesPerView: 2,
        direction: "horizontal",
        centeredSlides: false, // horizontal에서는 슬라이드를 가운데 정렬하지 않음
        spaceBetween: 10, // 슬라이드 간의 간격을 설정
      },
      // 화면 너비가 480px 이상일 때
      480: {
        slidesPerView: 2.5,
        direction: "horizontal",
        centeredSlides: false,
        spaceBetween: 15, // 적절한 간격으로 설정
      },
      500: {
        slidesPerView: 2.5,
      },

      700: {
        slidesPerView: 3,
        // direction: "vertical",
      },
      730: {
        slidesPerView: 3,
      },
      900: {
        slidesPerView: 3,
      },
      // 화면 너비가 1024px 이상일 때
      1024: {
        slidesPerView: 4,
      },
      // 화면 너비가 1024px 이상일 때
      1100: {
        slidesPerView: 4,
      },
      // 화면 너비가 1200px 이상일 때
      1200: {
        slidesPerView: 5,
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

  const flavorButtons = document.querySelectorAll(".menu-flavor");

  flavorButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      // 버튼이 속한 .product-list 요소 찾기
      const productList = button.closest(".product-list");
      if (productList) {
        // 해당 .product-list 내의 img02 이미지 선택
        const img02 = productList.querySelector(".img02");
        const img01 = productList.querySelector(".img01");
        if (img02) {
          // 이미지의 현재 표시 상태에 따라 토글
          if (img02.style.display === "none" || img02.style.display === "") {
            img02.style.display = "block";
            img01.style.display = "none";
          } else {
            img02.style.display = "none";
            img01.style.display = "block";
          }
        }
      }
    });
  });

  AOS.init();

  const buyB = document.querySelectorAll(".buyB");
  const menuSelect = document.querySelectorAll(".menu-select-area");
  
  menuSelect.forEach((menu) => {
    // 초기 상태에서 모든 메뉴 항목 숨기기
    menu.style.display = "none";
  });
  
  buyB.forEach((item, index) => {
    item.addEventListener("click", function () {
      // 현재 선택한 메뉴 항목의 display 상태를 확인
      const currentMenu = menuSelect[index];
  
      if (currentMenu.style.display === "block") {
        // 현재 보이는 상태라면 숨기기
        currentMenu.style.display = "none";
      } else {
        // 모든 메뉴 항목을 숨기기
        menuSelect.forEach((menu) => {
          menu.style.display = "none";
        });
        // 클릭한 버튼에 해당하는 메뉴 항목 보이기
        currentMenu.style.display = "block";
      }
    });
  });
  
};
