window.gaite = window.gaite || {};

window.gaite.colors = [
  "#F7AAFF",
  "#F6FD05",
  "#F7B20F",
  "#57E7FF",
  "#79FE42"
];

window.gaite.isColorMode = false;

window.gaite.init = function () {
  this.button = document.querySelector('.change-color-mode-button');

  if (this.button) {
    this.button.addEventListener('click', this.toggleMode.bind(this));
  }
};

window.gaite.toggleMode = function () {
  var color = "#FFFFFF";

  this.button.classList.remove('is-color-mode');

  this.isColorMode = !this.isColorMode;

  if (this.isColorMode) {
    color = this.getRandomColor();
    this.button.classList.add('is-color-mode');
  }

  this.setColor(color);
};

window.gaite.getRandomColor = function () {
  var index = Math.floor(Math.random() * this.colors.length),
    color = this.colors[index];
  return color;
};

window.gaite.setColor = function (color) {
  document.documentElement.style.setProperty("--color-background", color);
};

window.gaite.init();