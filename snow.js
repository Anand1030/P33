class Snow{
    constructor(x, y, height,width ) {
        var options = {
            setStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.body = Bodies.rectangle(this.x, this.y, this.height,this.width, options);
        this.image = loadImage("snow4.webp");
        console.log(this.y);
        World.add(world, this.body);
      }
      display(){
        
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
      }
}