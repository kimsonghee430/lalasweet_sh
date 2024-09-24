  //===============유효성 검사
  window.onload = function () {
    // 유효성 검사
    const signinBt = document.querySelector(".signinBt"); // 제출 버튼
  
    signinBt.addEventListener("click", function (e) {
      e.preventDefault(); // 폼 제출 중단
      const form = document.querySelector(".form");
  
      // 입력된 폼 데이터의 값
      const userName = form.userName.value.trim();
      const userId = form.userId.value.trim();
      const userPassword = form.userPassword.value;
      const userPasswordC = form.userPasswordC.value;
      const userPhone = form.userPhone.value;
      const userAdd = form.userAdd.value;
  
      // 에러 메시지 초기화
      let errorMessage = "";
  
      // 유효성 검사
      if (userName === "") {
        errorMessage += "이름을 입력해 주세요.\n";
      }
      if (userId === "") {
        errorMessage += "아이디를 입력해 주세요.\n";
      }
      if (userPassword === "") {
        errorMessage += "패스워드를 입력해 주세요.\n";
      }
      if (userPasswordC === "") {
        errorMessage += "패스워드 확인을 입력해 주세요.\n";
      } else if (userPassword !== userPasswordC) {
        errorMessage += "패스워드가 일치하지 않습니다.\n";
      }
      if (userPhone === "") {
        errorMessage += "전화번호를 입력해 주세요.\n";
      }
      if (userAdd === "") {
        errorMessage += "주소를 입력해 주세요.\n";
      }
  
      // 에러 메시지가 있는 경우
      if (errorMessage) {
        // 에러 메시지를 alert로 표시
        alert(errorMessage);
        return; // 폼 제출 중단
      }
  
      // 확인 메시지 작성
      let confirmationMessage = `
        이름: ${userName}\n
        연락처: ${userPhone}\n
        주소: ${userAdd}\n\n
        이 정보가 정확합니까?
      `;
  
      // 사용자에게 정보 확인 대화상자 표시
      let userConfirmed = confirm(confirmationMessage);
      if (userConfirmed) {
        // 사용자가 확인을 클릭했을 때
        alert("회원가입이 완료되었습니다.");
        alert("쿠폰이 정상적으로 발급되었습니다.");
        // 입력 필드를 리셋
        form.reset();
  
        // 페이지 이동 (2초 후)
        setTimeout(function () {
          window.location.href = "index.html";
        }, 1000);

        window.close()

      } else {
        // 사용자가 취소를 클릭했을 때
        alert("정보를 다시 확인해 주세요");
      }
    });
  };





