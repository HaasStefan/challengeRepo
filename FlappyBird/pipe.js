
function Pipe() {
  this.top = random((3*height)/5);
  this.bottom = this.top +(Math.random()*100)+100;
  this.x = width;
  this.w = 30;
  this.speed = 4;
  this.pass = false;

  this.show = function() {
    fill(255);
    rect(this.x, 0, this.w, this.top);
    rect(this.x, this.bottom, this.w, height - this.bottom);
  }

  this.update = function() {
    this.x -= this.speed;
  }

  this.offscreen = function () {
    if (this.x < -this.w) {
      return true;
    } else {
      return false;
    }
  }

  this.hit = function(bird) {
    if (bird.y-16 < this.top || bird.y+16 > this.bottom) {
      if (bird.x > this.x && bird.x < this.x + this.w) {
        return true;
      }

    }
  }

  this.passed = function(bird) {
    if (!this.pass) {
      if (bird.x > this.x + this.w){
        this.pass = true;
        return true;
      }
    }

  }

}
