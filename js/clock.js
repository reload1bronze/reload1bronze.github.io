const clock = document.querySelector("h2#clock");

function getClock() {
  const date = new Date();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock();
// 정해준 시간 간격으로 함수를 반복 실행
setInterval(getClock, 1000);
// 정해준 시간 이후에 함수를 실행
// setTimeout(sayHello, 1000);
