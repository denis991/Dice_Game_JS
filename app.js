const button = document.querySelector('.roll');
const image = document.querySelector('.image');
setInterval(() => {
  let event = new Event("click");
  button.dispatchEvent(event);


}, 1000);
button.addEventListener('click', () => {
  let img;
  const randomNumber = getRandomInt();
  switch (randomNumber) {
    case 1:
      img = "dice_1.png";
      break;
    case 2:
      img = "dice_2.png";
      break;
    case 3:
      img = "dice_3.png";
      break;
    case 4:
      img = "dice_4.png";
      break;
    case 5:
      img = "dice_5.png";
      break;
    case 6:
      img = "dice_6.png";
      break;
    default:
      break;
  }

  image.innerHTML = `<img src=${img}>`;
})


// рандомно ищим число
const getRandomInt = () => Math.floor(Math.random() * (7 - 1)) + 1;
