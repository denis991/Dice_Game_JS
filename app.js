const button = document.querySelector('.roll');
const image = document.querySelector('.image');
const image2 = document.querySelector('.image2');

// рандомнo ищим число
const getRandomInt = () => Math.floor(Math.random() * (7 - 1)) + 1;

function pick(randomNumber) {
  let img;
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
  return img;
}



setInterval(() => {
  let event = new Event("click");
  button.dispatchEvent(event);
}, 100000);
button.addEventListener('click', () => { //по нажатию происходит событие

  const randomNumbers = [getRandomInt(), getRandomInt()];//генерируется число и подставляется в масив двух чисел они в масиве
  const images = [image, image2];//массив 2 изображений
  randomNumbers.forEach((num, i) => { //цикл проходит 
    const img = pick(randomNumbers[i]);//подставляется pick возврящяет 
    images[i].innerHTML = `<img src=${img}>`;// 
  })
})
