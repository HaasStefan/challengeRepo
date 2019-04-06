function Bird() {
  this.y = height/2;
  this.x = 100;

  this.gravity = 0.5;
  this.velocity = 0;

  this.show = function() {
    fill(0, 0, 255);
    ellipse(this.x, this.y, 32, 32);
  }

  this.update = function() {
    this.velocity += this.gravity;
    this.y += this.velocity;


    if (this.y > height) {
      this.y = height;
      this.velocity = 0;
    }

  }

  this.up = function() {
    this.velocity = 0;
    this.velocity -= 10;
  }
}
