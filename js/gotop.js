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
    // gotop 버튼 윗쪽에서는 숨기기
    const main = document.querySelector(".main")
    const goTop = document.querySelector(".gotop")
    function scrollEvent(event){
      const STANDARD = 1010;
      if(window.scrollY > STANDARD){
        main.classList.add("hide")
        goTop.classList.add("show")
      }else {
        main.classList.remove("hide")
        goTop.classList.remove("show")
      }
    }
    window.addEventListener("scroll", scrollEvent)
  });
  