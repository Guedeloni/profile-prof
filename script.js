function move(event) {
  let X = event.clientX || event.touches[0].clientX;
  let Y = event.clientY || event.touches[0].clientY;
  document.documentElement.style.setProperty ('--X', X + 'px');
  document.documentElement.style.setProperty ('--Y', Y + 'px');
}

let blackout = document.getElementById('blackout');
let light = document.getElementById('footer');

blackout.addEventListener('mouseover', (event) => {
  console.log("********blackout hover**********");
  // console.log(document.documentElement.style.display);
  document.documentElement.style.setProperty ('--DISPLAY', 'block');
  move(event);
});

light.addEventListener('mouseover', (event) => {
  console.log("********blackout not hover**********");
  document.documentElement.style.setProperty ('--DISPLAY', 'none');
});

// blackout.addEventListener('touchpad', move);
