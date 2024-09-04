$(document).ready(function () {
    $(".modal-wrap").fadeIn(); // 모달 창 보이기
    // 모달이 이미 열려있는지 여부를 확인하는 함수
    function isModalOpened() {
      return document.cookie.includes("modalOpened=true");
    }
  
    // 모달이 열려있는 경우에는 바로 반환하여 모달을 다시 열지 않도록 함
    if (!isModalOpened()) {
      $(".modal-wrap").fadeIn(); // 모달 창 보이기
    }
  
    // $("#event").click(function () {
    //   $("#modal").css("display", "fixed").hide().fadeIn();
    // });
  
    $("#close").click(function () {
      modalClose();
    });
  
    // 모달을 닫는 함수
    function modalClose() {
      $("#modal").fadeOut();
      $(".modal-wrap").fadeOut(); // 모달 창 숨기기
      // 모달이 닫힐 때 쿠키를 설정하여 다음에는 모달이 뜨지 않도록 함
      document.cookie = "modalOpened=true"; // 모달이 닫힌 후 쿠키 설정
    }
  
    var prize = "product03";
    var prize;
    // 1부터 5까지의 랜덤한 정수 생성
    var randomNumber = Math.floor(Math.random() * 4) + 1;
    // randomNumber에 따라 prize 값 설정
    switch (randomNumber) {
      case 1:
        prize = "product01";
        break;
      case 2:
        prize = "product02";
        break;
      case 3:
        prize = "product03";
        break;
      case 4:
        prize = "product04";
        break;
      // case 5:
      //   prize = "product05";
      //   break;
      default:
        // 예외 처리 등을 추가할 수 있음
        break;
    }
  
    $("#start-rotate").click(function () {
      var degrees;
      var resultImage;
      switch (prize) {
        case "product01":
          degrees = 0;
          resultImage = "images/roulette/result_2.png";
          break;
        case "product02":
          degrees = 90;
          resultImage = "images/roulette/result_1.png";
          break;
        case "product03":
          degrees = 180;
          resultImage = "images/roulette/result_4.png";
          break;
        case "product04":
          degrees = 270;
          resultImage = "images/roulette/result_3.png";
          break;
        // case "product05":
        //   degrees = 288;
        //   resultImage = "images/result-5.png";
        //   break;
        default:
          // 예외 처리 등을 추가할 수 있음
          break;
      }
      rotate(degrees);
      $("#resultImg").attr("src", resultImage);
      window.setTimeout(resultLayer, 2400);
    });
    function rotate(degrees) {
      // 최종 각도 계산
      var finalDegrees = 360 * 4 + degrees;
      // 애니메이션을 적용할 요소 선택
      var rouletteGift = document.getElementById("roulette-startBtn");
    //   var rouletteGift = document.getElementById("roulette-gift");
  
      // 애니메이션 스타일 동적 생성
      rouletteGift.style.animation = `rotateAnimation 2s ease-in-out forwards`;
  
      // @keyframes 규칙 동적 업데이트
      var cssAnimation = document.createElement("style");
      cssAnimation.type = "text/css";
      var rules = document.createTextNode(`@keyframes rotateAnimation {
          from { transform: rotate(0deg); }
          to { transform: rotate(${finalDegrees}deg); }
        }`);
  
      cssAnimation.appendChild(rules);
      document.getElementsByTagName("head")[0].appendChild(cssAnimation);
    }
  
    // function rotate(degrees) {
    //   $("#roulette-gift").rotate({
    //     angle: 0,
    //     animateTo: 360 * 5 + degrees,
    //     easing: $.easing.easeInOutElastic,
    //     duration: 5000,
    //   });
    // }
  
    function resultLayer() {
      $(".resultLayer").css("display", "block");
    }
  
    $("#closeLayer").click(function () {
      $(".resultLayer").css("display", "none");
  
      $("#roulette-gift").rotate({
        angle: 0,
        duration: 0,
      });
    });
  
    // 결과 확인 버튼 클릭 이벤트 처리
    $("#resultOk").click(function (event) {
      event.preventDefault(); // 기본 이벤트 제거 (폼 전송 방지)
  
      // 개인정보 수집 동의 여부 확인
      var agreement = $("#resultInfo").prop("checked");
  
      // 개인정보 수집에 동의한 경우에만 알림창 띄우기
      if (agreement) {
        // 경품 발송을 위해 입력된정보 가져오기
        var name = $("#resultName").val();
        var tel = $("#resultTel").val();
        // 입력된 정보 확인
        var confirmationMessage =
          "이름: " +
          name +
          "\n연락처: " +
          tel +
          "\n위 정보로 경품 발송을 진행하시겠습니까?";
  
        // 경품 발송 정보 확인을 위한 알림창 표시
        var confirmation = confirm(confirmationMessage);
  
        // 사용자가 확인을 눌렀을 때만 경품 발송 진행
        if (confirmation) {
          // 여기에 경품 발송 등의 작업을 수행하는 코드를 추가할 수 있습니다.
          alert("이벤트 참여 완료! 메인페이지로 이동합니다.");
  
          // 모달 닫기
          modalClose();
        }
        agreement = "";
      } else {
        alert("개인정보 수집에 동의해주세요.");
      }
    });
  
    // 제품소개 페이지로 이동하는 이벤트 핸들러
    $("#resultOk").click(function () {
      // 결과 창이 열려 있으면 닫기
      if ($(".resultLayer").css("display") !== "none") {
        $(".resultLayer").css("display", "none"); // 결과 창 닫기
        modalClose(); // 모달 닫는 함수가 있다면 호출
      }
  
      // 룰렛 돌리기 기능이 즉시 시작되어야 한다면 여기서 호출
      // startRoulette(); // 룰렛을 시작하는 함수가 있다면 호출
  
      // 모든 로직 수행 후 페이지 이동
      window.location.href = "index.html";
    });
  });