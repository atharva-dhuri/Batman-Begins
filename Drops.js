class Drops {
    constructor(x, y){
        var option = {
            friction: 0.1
        }
        this.r = 1;
        this.body = Bodies.circle(x, y, this.r);
        World.add(world, this.body);
    }
}