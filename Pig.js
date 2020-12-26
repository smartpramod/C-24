class Pig{

    constructor(x,y)
    {
        var body_options={
            density:1.0,
            restitution : 0.8,
            friction:0.8
        }
        this.body=Bodies.rectangle(x,y,50,50,body_options);
        this.width=50;
        this.height=50;
        World.add(world,this.body);
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push ();
        translate (pos.x,pos.y);
        rotate (angle);
        fill ("red");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop ();
    }
    
    
    
    }