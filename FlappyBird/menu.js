function Menu() {
  this.score = 0;
  this.highscore = 0;
  this.w = 300;
  this.h = 300;

  this.show = function(score, highscore) {
    this.score = score;
    this.highscore = highscore;
    fill(200, 200, 100);
    rect((width/2)-150, 50, this.w, this.h);
    noStroke();
    fill(255);
    textSize(28);
    text("score: " + score, (width/2)-140, 100);
    text("highscore: " + highscore, (width/2)-140, 150);
  }

}

// todo Cookie for highscore
