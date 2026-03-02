window.gaite = window.gaite || {};

window.gaite.colorsBackground = [
  "#F7AAFF",
  "#F6FD05",
  "#F7B20F",
  "#57E7FF",
  "#79FE42"
];

window.gaite.colorsBackgroundAlt = [
  "#EB9DEB",
  "#E3EB01",
  "#EBA40C",
  "#19D5EB",
  "#70EB3D",
];

window.gaite.colorsAccent = [
  "#870095",
  "#575a01",
  "#593f03",
  "#006778",
  "#216f01"
];

window.gaite.colorLocalKey = "gaite-is-colored";

window.gaite.isColorMode = true; // Set as string for localStorage

window.gaite.init = function () {
  var colorMode = localStorage.getItem(window.gaite.colorLocalKey) || window.gaite.isColorMode.toString();

  this.button = document.querySelector('.change-color-mode-button');

  if (this.button) {
    this.button.addEventListener('click', this.toggleMode.bind(this));
  }

  if (colorMode == "true") {
    this.toggleMode();
  }
};

window.gaite.setRandomAccentColor = function () {
  var randomColors = this.getRandomColors(),
      colors = ["#FFFFFF", randomColors[1], "#EBEBEB"];

  this.setColors(colors);
};

window.gaite.toggleMode = function () {
  var colors = ["#FFFFFF", "#000000", "#EBEBEB"];

  document.body.classList.add('is-color-mode-changing'); // avoid glitch on page loading

  this.button.classList.remove('is-color-mode');

  this.isColorMode = this.isColorMode == "true" ? "false" : "true"; // Set as string for localStorage

  if (this.isColorMode == "true") {
    colors = this.getRandomColors();
    this.button.classList.add('is-color-mode');
  }

  this.setColors(colors);

  localStorage.setItem(window.gaite.colorLocalKey, this.isColorMode.toString());

  setTimeout(function(){
    document.body.classList.remove('is-color-mode-changing'); // avoid glitch on page loading
  }, 10);
};

window.gaite.getRandomColors = function () {
  var index = Math.floor(Math.random() * this.colorsBackground.length);
  return [this.colorsBackground[index], this.colorsAccent[index], this.colorsBackgroundAlt[index]];
};

window.gaite.setColors = function (colors) {
  document.documentElement.style.setProperty("--color-background", colors[0]);
  document.documentElement.style.setProperty("--color-accent", colors[1]);
  document.documentElement.style.setProperty("--color-background-alt", colors[2]);
};

window.gaite.init();