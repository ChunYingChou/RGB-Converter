// DOM
const redText = document.querySelector("#r-input");
const greenText = document.querySelector("#g-input");
const blueText = document.querySelector("#b-input");
const convertBtn = document.querySelector(".convert");
const hexText = document.querySelector("#hex-input");
const hexColor = document.querySelector(".basic-hex-output");

// 16位元轉換
function toHex() {
  let redValue = Number(redText.value).toString(16);
  let greenValue = Number(greenText.value).toString(16);
  let blueValue = Number(blueText.value).toString(16);
  const convertcode = `#${redValue.padStart(2, "0")}${greenValue.padStart(
    2,
    "0"
  )}${blueValue.padStart(2, "0")}`;

  return (hexText.innerText = convertcode);
}

// 按鈕監聽事件
convertBtn.addEventListener("click", function (event) {
  const redNum = redText.value;
  const greenNum = greenText.value;
  const blueNum = blueText.value;

  if (
    redNum < 0 ||
    greenNum < 0 ||
    blueNum < 0 ||
    redNum > 255 ||
    greenNum > 255 ||
    blueNum > 255
  ) {
    alert("You should input number from 0 to 255.");
  } else if (
    redNum.trim().length === 0 ||
    greenNum.trim().length === 0 ||
    blueNum.trim().length === 0
  ) {
    alert("You should input a number.");
  } else {
    const hexNum = toHex();
    hexText.value = hexNum;
    hexColor.style.background = hexNum;
  }
});
