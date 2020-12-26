class Box{

constructor(x,y,width,height)
{
    var body_options={
        density:1.0,
        restitution : 0.8,
        friction:0.8
    }
    this.body=Bodies.rectangle(x,y,width,height,body_options);
    this.width=width;
    this.height=height;
    World.add(world,this.body);
}
display()
{
    var pos=this.body.position;
    var angle=this.body.angle;
    push ();
    translate (pos.x,pos.y);
    rotate (angle);
    strokeWeight(4);
    stroke("green");
    fill (255);
    rectMode(CENTER);
    rect(0,0,this.width,this.height);
    pop ();
}



}