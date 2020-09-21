class ground 
{
	constructor(x, y, width, height)
	{
		var options={
        isStatic:true			
    }
		this.x=x;
		this.y=y;
		this.w=width
		this.h=40
		this.body=Bodies.rectangle(x, y, width, height , options);
 		World.add(world, this.body);
	}
	display()
	{	
			var groundPos=this.body.position;		
			push()
			translate(groundPos.x, groundPos.y);
			rectMode(CENTER)
			fill(255)
			rect(0,0,this.w, this.h);
			pop()
			
	}

}