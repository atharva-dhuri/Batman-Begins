class Man {
    constructor(x, y) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.circle(x, y, 40, options);
        this.r = 60;
        this.image = loadImage("Sprites/walking_1.png", "Sprites/walking_2.png", "Sprites/walking_3.png", "Sprites/walking_4.png", "Sprites/walking_5.png", "Sprites/walking_6.png", "Sprites/walking_7.png", "Sprites/walking_8.png")
        World.add(world, this.body);
    }

    display() {
        push();
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y+90, 300, 300);
        pop();
    }
}