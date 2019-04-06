
var bird;
var pipes = [];
var score = 0;
var highscore = 0;
var stopped = false;


function setup() {
  createCanvas(400, 600);
  bird = new Bird();
  menu = new Menu();
  pipes.push(new Pipe());

  alert(navigator.cookieEnabled);

   if (typeof (document.cookie == "undefined"))
    document.cookie = "highscore=0; expires=Sun, 1 Dec 2030 12:00:00 UTC; path=/";

}

function reset() {
  pipes.splice(0, pipes.length);
  bird = new Bird();
  pipes.push(new Pipe());
  stopped = false;
  score = 0;
  highscore = 0;
}

function draw() {
  background(0);

  noStroke();
  fill(255, 0, 0);
  textSize(28);
  text(score, width/2, 40);

  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    if (!stopped) {
      pipes[i].update();

      if(pipes[i].hit(bird)) {
        stopped = true;
      }

      if (pipes[i].passed(bird)) {
        score++;
      }

      if (pipes[i].offscreen()) {
        pipes.splice(i, 1);
      }
    } else {
      let str = decodeURIComponent(document.cookie).split(';');
      highscore = str[0].split('=')[1];
      if (score > highscore) {
        highscore = score;
        document.cookie = "highscore=" + highscore + "; expires=Sun, 1 Dec 2030 12:00:00 UTC; path=/";
      }
      menu.show(score, str[1]);
      break;
    }

  }

  bird.update();
  bird.show();

  if (frameCount % 70  == 0) {
    pipes.push(new Pipe());
  }
}

function keyPressed() {
  if (key == ' ') {
    if (stopped) {
      reset();
    } else {
      bird.up();
    }
  }


}
