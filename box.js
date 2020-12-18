class Box{
    constructor(x,y,width,height){
     
        
    var option={
        isStatic : true
    }
        this.object = Bodies.rectangle(x,y,width,height,option);
        this.width=width;
        this.height=height;
        World.add(world,this.object);

    }
display(){
var pos =this.object.position;

recMode(CENTER);
rect(pos.x,pos.y,this.width,this.height)

}
}