class Box{
    constructor(x,y,width,height){
        var options = {
        'restituiton':0.6,
        'friction':200000000000000000,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        World.add(world,this.body)
    }
    display(){
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
}