class Iron{
  constructor(x,y){
    var option={
        'restitution':0.8,
        'friction':3,
        'density':30
     }
     this.body=Bodies.rectangle(x,y,50,50,option);
    this.width=80
    this.height=50
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position; 
      var angle = this.body.angle;
       push();
       translate(pos.x, pos.y);
        rotate(angle);
         fill('brown')
          rectMode(CENTER) 
          rect(0, 0, this.width, this.height);
           pop();

}
}