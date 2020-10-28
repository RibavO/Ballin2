class Paper {
    constructor(x, y, radius) {
      
      var options = {
          isStatic : false,
          restitution: 0.5,
          friction: 0.3, 
          density:1.2
      }
      
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;    
      this.image = loadImage("sprites/crumpledPaper.png");
      this.image.scale = 0.6;
      World.add(world, this.body);
    }

    display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        ellipseMode(RADIUS);
        fill("white");
        ellipse(pos.x, pos.y, this.radius, this.radius);
        image(this.image, pos.x-25, pos.y-25, this.radius+30, this.radius+30);

    }
}


