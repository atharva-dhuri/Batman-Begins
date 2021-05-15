class createDrops{
    constructor(x, y){
        var options = { 
            'restitution':1,
            'friction':0.01
          }
          this.body = Bodies.circle(x, y, 1, options);
          this.radius = 3;
          World.add(world, this.body);

    }
   
    update(){
      if(this.body.position.y > height){
        Matter.Body.setPosition(this.body,{x:random(0, 500), y:random(0, 650)});
      }
    }
  
    display(){
      noStroke();
      fill(0,0,255);
      ellipseMode(RADIUS);
      ellipse(this.body.position.x, this.body.position.y, this.radius, this.radius);
    }
  }