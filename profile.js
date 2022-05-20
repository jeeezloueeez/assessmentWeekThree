console.log(`This probably the best profile u gonna c today so might as well just pass me lol`)

const colorButton = document.getElementById('color');
const placeButton = document.getElementById('place');
const ritualButton = document.getElementById('ritual');

const buttonArr = [colorButton, placeButton, ritualButton]

colorAlert = (evt) => {
  alert(`Luis's favorite color is Gold.`)
}

placeAlert = (evt) => {
  alert(`Luis's favorite place is Rome, Italy.`)
}

ritualAlert = (evt) => {
  alert(`Luis's favorite ritual is hositng game night with friends.`)
}


colorButton.addEventListener('click', colorAlert)
placeButton.addEventListener('click', placeAlert)
ritualButton.addEventListener('click', ritualAlert)

//extra
colorChange = (evt) => {
  evt.target.style.backgroundColor = 'red';
}
colorRevert = (evt) => {
  let button = evt.target
  button.style.backgroundColor = 'yellow';
}

buttonArr.forEach(element => {
  element.addEventListener('mouseover', colorChange);
  element.addEventListener('mouseout', colorRevert);
});
