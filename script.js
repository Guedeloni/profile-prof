function move(event) {
  // let X = event.clientX || event.touches[0].clientX;
  // let Y = event.clientY || event.touches[0].clientY;
  let X = event.clientX;
  let Y = event.clientY;
  document.documentElement.style.setProperty ('--X', X + 'px');
  document.documentElement.style.setProperty ('--Y', Y + 'px');
}

let header = document.getElementById('header');
let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let footer = document.getElementById('footer');

card2.addEventListener('mousemove', (event) => {
  console.log("********card2 hover**********");
  document.documentElement.style.setProperty ('--OPACITY', 1);
  document.documentElement.style.setProperty ('--DISPLAY', 'block');
  move(event);
});

header.addEventListener('mouseover', (event) => {
  console.log("********card2 not hover**********");
  document.documentElement.style.setProperty ('--OPACITY', 0.1);
  document.documentElement.style.setProperty ('--DISPLAY', 'none');
});
card1.addEventListener('mouseover', (event) => {
  console.log("********card2 not hover**********");
  document.documentElement.style.setProperty ('--OPACITY', 0.1);
  document.documentElement.style.setProperty ('--DISPLAY', 'none');
});
footer.addEventListener('mouseover', (event) => {
  console.log("********card2 not hover**********");
  document.documentElement.style.setProperty ('--OPACITY', 0.1);
  document.documentElement.style.setProperty ('--DISPLAY', 'none');
});

// blackout.addEventListener('touchpad', move);
