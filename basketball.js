class Basketball {
    constructor (x,y){
        this.x = x
        this.y = y
        this.r = 30;
        var options = {
            isStatic: true,
            restitution: 0.5,
            density: 0.5,
        }

        this.body = Bodies.circle(x, y, this.r, options);
        this.image = loadImage("Images/basketball.png");
        World.add(world, this.body);
    }

    shoot() {
        console.log(this.body.angle)
        var newAngle = this.body.angle + 45;
        newAngle = newAngle *(3.14/90);
        console.log(newAngle);
        var velocity = p5.Vector.fromAngle(newAngle);
        Matter.Body.setVelocity(this.body, {x: velocity.x, y: velocity.y});
        velocity.mult(0.5);
        Matter.Body.setStatic(this.body, false);
        Matter.Body.applyForce(this.body, this.body.position, {
        x: -18, y: -32});
      }


    display() {
        var pos = this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,0, 0, this.r, this.r);
        pop();
    }
}