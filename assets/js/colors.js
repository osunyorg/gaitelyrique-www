window.gaite = window.gaite || {};

window.gaite.colorsBackground = [
  "#F7AAFF",
  "#F6FD05",
  "#F7B20F",
  "#57E7FF",
  "#79FE42"
];

window.gaite.colorsAccent = [
  "#870095",
  "#575a01",
  "#593f03",
  "#006778",
  "#216f01"
];

window.gaite.colorLocalKey = "gaite-is-colored";

window.gaite.isColorMode = false;

window.gaite.init = function () {
  var colorMode = localStorage.getItem(window.gaite.colorLocalKey);

  this.button = document.querySelector('.change-color-mode-button');

  if (this.button) {
    this.button.addEventListener('click', this.toggleMode.bind(this));
  }

  if (colorMode == "true") {
    this.toggleMode();
  }
};

window.gaite.toggleMode = function () {
  var colors = ["#FFFFFF", "#000000"];

  this.button.classList.remove('is-color-mode');

  this.isColorMode = this.isColorMode == "true" ? "false" : "true";
  if (this.isColorMode === "true") {
    colors = this.getRandomColors();
    this.button.classList.add('is-color-mode');
  }

  this.setColors(colors);

  localStorage.setItem(window.gaite.colorLocalKey, this.isColorMode.toString());
};

window.gaite.getRandomColors = function () {
  var index = Math.floor(Math.random() * this.colorsBackground.length);

  return [this.colorsBackground[index], this.colorsAccent[index]];
};

window.gaite.setColors = function (colors) {
  document.documentElement.style.setProperty("--color-background", colors[0]);
  document.documentElement.style.setProperty("--color-accent", colors[1]);
};

window.gaite.init();