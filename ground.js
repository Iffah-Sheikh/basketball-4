class Ground {
    constructor(x,y, width, height) {
        this.width = width;
        this.height = height;
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x,y,width,height, options);
        World.add(world,this.body);
    }

    display() {
        var pos = this.body.position;
        rectMode(CENTER)
        push();
        translate(pos.x, pos.y);
        noStroke();
        rect(0,0,this.width, this.height);
        pop();
    }
}