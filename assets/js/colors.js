window.gaite = window.gaite || {};

gaite.colors = [
  "#FFFFFF",
  "#F7AAFF",
  "#F6FD05",
  "#F7B20F",
  "#57E7FF",
  "#79FE42"
];

gaite.init = function () {
  this.setRandomColor();
};

gaite.setRandomColor = function () {
  var index = Math.floor(Math.random() * this.colors.length),
    color = this.colors[index];
  document.documentElement.style.setProperty("--color-background", color);
};

gaite.init();