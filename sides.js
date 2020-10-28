class Side{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'density':1.0,
            'isStatic': true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
}

//this.blank can only be defined in constructor