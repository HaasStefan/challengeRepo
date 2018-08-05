let S = [];
let count = 0;
let active_num = 0;

function setup() {
  createCanvas(4000, 500);
  background(255, 255, 255);
  frameRate(20);
}

function draw() {
  step();
  drawStep();
}

function drawStep() {
  var scale = 10;
  var prev_num = scale * S[count-1];
  var num = scale * active_num;

  var x = (prev_num + num) /2;
  var y = height / 2;
  var w = abs(num - prev_num);
  var h = w;

  stroke(random(50), (255), random(50));

  noFill();
  arc(x, y, w, h, (count % 2 == 0) ? 0 : PI, (count % 2 == 0) ? PI : 0);
}

function step() {
  count++;
  S.push(active_num);
  console.log('active_num: ' + active_num +'  count: ' + count + '  sequence: ' + S);
  if (S.indexOf(active_num - count) > 0) {
    active_num += count;
  } else {
    if (active_num - count <= 0) {
      active_num += count;
    } else {
      active_num -= count;
    }
  }
}
