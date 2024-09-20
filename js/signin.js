window.onload = function () {
  const signinBt = document.querySelector(".signinBt");
  signinBt.addEventListener("click", function() {
      alert("회원가입이 완료되었습니다.");
      alert("쿠폰이 정상적으로 발급되었습니다.");

    // 모달 닫기
    window.close()

    // 페이지 이동
    setTimeout(function() {
        window.location.href = "index.html#event";
    }, 100); // 2초 후 페이지 이동
}
  )};
