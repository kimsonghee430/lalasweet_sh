window.addEventListener("load", function () {
    // gotop
    AOS.init();
    // gotop바로가기 기능
    const gotop = this.document.querySelector(".gotop");
    //   위로 가기 기능
    gotop.addEventListener("click", function () {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
  