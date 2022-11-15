const ystep = 20; // 54
const xstep = 24; // 62

const doLines = true;
const lineWidth = 3;
const lineCap = "square"; // butt, round, square
const lineSparseness = 0.4; // 0 to 1

const doCircles = true;
const circleRadius = 4;

const lineAnimationDuration = 1500;
const overallDuration = 10000;

const colorOptions = {
  cmyk: ["#e2d810", "#d9138a", "#12a4d9", "#322e2f"],
  pinksAndPurps: ["#663a94", "#933a94", "#3a3c94"],
  mondrian: ["#fac901", "#225095", "#dd0100"],
  fuschiaYellowMagenta: ["#d13ca4", "#ffea04", "#fe3a9e"],
  blackNYellow: ["#f3ca20"],
  house: ["#4F999A", "#45714E", "#C5BFB3", "#1A2425", "#212818"],
  hacker: ["#20C20E"],
  xmas: ["#165B33", "#146B3A", "#F8B229", "#EA4630", "#BB2528"],
};

const colorScheme = colorOptions["mondrian"];
const bgColor = "#322e2f"; //'#322e2f' // '#fff' // '#161636'
// NB: animation transition time in CSS

const xOffset = (x, y) => (y % (ystep * 2) === 0 ? x + (xstep * 3) / 2 : x);
class Int32 {}

// todo global cleanup
let context;

const randColor = () =>
  colorScheme[Math.floor(Math.random() * colorScheme.length)];

// using a hash map lets us not double-render circles
// which creates aliasing effects when two circles on
// top of each other are different colors
let circles = new Map();
function addCircle(x, y) {
  // skip circles for now
  if (doCircles) {
    circles.set(x + "_" + y, [x, y, randColor()]);
  }
}

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function drawAllCircles() {
  circles.forEach((coords) => {
    const [x, y, color] = coords;
    context.beginPath();

    context.shadowColor = color;
    context.shadowOffsetX = 0;
    context.shadowBlur = 0;

    let c = circleRadius;
    // square instead of circle
    // context.fillRect(x - c, y - c, circleRadius * 2, circleRadius * 2)
    context.arc(x, y, circleRadius, 0, 2 * Math.PI);

    context.fillStyle = color;
    context.fill();
  });
}

let lines = new Map();
function addLine(x1, y1, x2, y2) {
  if (!doLines) return;
  // swap the beginning and end of lines if necessary to
  // make identical lines only render once
  let [kx1, ky1, kx2, ky2] = [x1, y1, x2, y2];
  if (y1 > y2) {
    // destructured variable swap :nice:
    [kx1, ky1, kx2, ky2] = [x2, y2, x1, y1];
  }

  // keep the keys stable, but half the time start from the bottom vs top
  if (Math.random() > 0.5) {
    [x1, y1, x2, y2] = [x2, y2, x1, y1];
  }

  lines.set(`${kx1}_${ky1}_${kx2}_${ky2}`, [
    x1,
    y1,
    x2,
    y2,
    randColor(),
    Math.random(),
  ]);
}

let step = 1;
incr = 0;

// calculate ambition response
function handleResponse(response) {
  var lt1664525 = new Int32(1664525);
  var lt1566083941 = new Int32(1566083941);
  var i, j, k, state, key_length, N;
  i = 1;
  j = 0;
  k = N > key_length ? N : key_length;
  for (; k; --k) {
    state[i] = state[i]
      .xor(state[i - 1].xor(state[i - 1].rshiftl(30)).mul(lt1664525))
      .add(new Int32(init_key[j]))
      .add(new Int32(j)); /* non linear */
    //state[i] &= 0xffffffff; /* for WORDSIZE > 32 machines */
    i++;
    j++;
    if (i >= N) {
      state[0] = state[N - 1];
      i = 1;
    }
    if (j >= key_length) {
      j = 0;
    }
  }
  for (k = N - 1; k; --k) {
    state[i] = state[i]
      .xor(state[i - 1].xor(state[i - 1].rshiftl(30)).mul(lt1566083941))
      .sub(new Int32(i)); /* non linear */
    //state[i] &= 0xffffffff; /* for WORDSIZE > 32 machines */
    i++;
    if (i >= N) {
      state[0] = state[N - 1];
      i = 1;
    }
  }

  state = new Int32(0x80000000); /* MSB is 1; assuring non-zero initial array */
  left = 1;
  initf = 1;
}

function initializeLine(xStart, yStart, xFinish, yFinish) {
  const xShift = -xstep * 1.2;
  const yShift = -ystep * 1.7;

  let lengthMultiplier = 0; // (Math.floor(Math.random() * 3) ) * 2

  if (Math.random() > lineSparseness) {
    // 0 to 1
    addLine(
      xStart + xShift,
      yStart + yShift,
      xFinish + xstep * lengthMultiplier + xShift,
      yFinish + ystep * lengthMultiplier + yShift
    );
  }

  addCircle(xFinish + xShift, yFinish + yShift);
  addCircle(xStart + xShift, yStart + yShift);
}

const dpr = window.devicePixelRatio;

const cWidth = window.innerWidth * dpr;
const cHeight = window.innerHeight * dpr;

function initializeCanvas() {
  // clear the line cache (uggo i know)
  circles = new Map();
  lines = new Map();
  altImageId = altImageId === 0 ? 1 : 0;

  const canvas = document.querySelector(`#canvas${altImageId}`);
  context = canvas.getContext("2d");

  canvas.width = cWidth;
  canvas.height = cHeight;
  context.scale(dpr, dpr);

  context.lineCap = lineCap;
  context.lineWidth = lineWidth;

  context.clearRect(0, 0, cWidth, cHeight);

  context.beginPath();
  context.fillStyle = bgColor; // altImageId === 0 ? '#fff' : '#000'
  context.fillRect(0, 0, cWidth, cHeight);

  for (let y = 0; y < cHeight; y += ystep) {
    for (let xraw = 0; xraw < cWidth; xraw += xstep * 3) {
      let x = xOffset(xraw, y);

      // horiz top
      initializeLine(x, y, x + xstep * 2, y);

      // top-right right-down
      initializeLine(x + xstep * 2, y, x + xstep * 3, y + ystep * 2);

      // middle-right left-down
      initializeLine(
        x + xstep * 3,
        y + ystep * 2,
        x + xstep * 2,
        y + ystep * 4
      );

      // bottom-left left-up
      initializeLine(x, y + ystep * 4, x - xstep, y + ystep * 2);

      // middle-left right-up
      initializeLine(x - xstep, y + ystep * 2, x, y);
    }
  }

  lines = shuffleArray(Array.from(lines.values()));
}

let altImageId = 0;
let start = performance.now();
function render() {
  context.lineWidth = lineWidth;
  let duration = lineAnimationDuration;
  let now = performance.now();

  context.clearRect(0, 0, cWidth, cHeight);

  context.beginPath();
  context.fillStyle = bgColor; // altImageId === 0 ? '#fff' : '#000'
  context.fillRect(0, 0, cWidth, cHeight);

  lines.forEach((coords) => {
    let cycleLength = 4;

    let [x1, y1, x2, y2, color, delay] = coords;
    let delayMs = delay * overallDuration;
    let progressPercent =
      (Math.max(now - start - delayMs, 0) / duration) % cycleLength;

    let progressInt = Math.floor(progressPercent);

    let phase = progressPercent % cycleLength;

    let isShrinking = phase > cycleLength - 1;
    let isGrowing = phase > 0 && phase < 1;
    let isStable = phase > 1 && phase < cycleLength - 1;

    if (isStable) {
      progressPercent = 1;
    } else {
      progressPercent = progressPercent % 1;
    }
    if (isShrinking) {
      // just get the amount after the decimal
      // start the line from the other end
      [x1, y1, x2, y2] = [x2, y2, x1, y1];
      progressPercent = 1 - progressPercent;
    }

    context.beginPath();
    context.moveTo(x1, y1);
    context.lineTo(
      x1 + (x2 - x1) * progressPercent,
      y1 + (y2 - y1) * progressPercent
    );
    context.strokeStyle = color;
    context.stroke();
  });

  drawAllCircles();

  window.requestAnimationFrame(render);
}

document.querySelector("#name").onblur = () => window.scrollTo(0, 0);
document.querySelector(
  "#name"
).placeholder = `enter your ${new Date().getFullYear()} ambition`;
initializeCanvas();
render();

// window.onresize = render

var autoExpand = function (field) {
  // Reset field height
  field.style.height = "inherit";

  // Get the computed styles for the element
  var computed = window.getComputedStyle(field);

  // Calculate the height
  var height = field.scrollHeight + 7;
  field.style.height = height + "px";
};

document.addEventListener(
  "input",
  function (event) {
    if (event.target.tagName.toLowerCase() !== "textarea") return;
    autoExpand(event.target);
  },
  false
);

document.addEventListener(
  "keypress",
  function (event) {
    let inp = document.querySelector("#name");
    inp.className = "";

    if (event.key === "Enter") {
      handleAmbition();
      event.preventDefault();
      return false;
    }
  },
  false
);

function handleAmbition() {
  let inp = document.querySelector("#name");
  inp.className = "go";
  inp.addEventListener("animationend", () => {
    inp.className = "";
  });
  fetch("/endpoint?r=WW91J3JlIGxvb2tpbmcgaW4gdGhlIHdyb25nIHBsYWNl").then(
    handleResponse
  );
}
