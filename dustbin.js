class Dustbin{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("sprites/dustbingreen.png");
        //World.add(world, this.body);
      }
      display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
      }
}

//this.blank can only be defined in constructor