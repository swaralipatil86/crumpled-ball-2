class Ground{
    constructor(x,y,width,height){
      var options={
        isStatic:true
      }
      this.body=Bodies.rectangle(x,y,width,height);
      World.add(world,this.body);
      this.w=width;
      this.h=height
    }
    display(){
      rectMode(CENTER);
      var pos=(this.body.postion)
      rect(pos.x,pos.y,this.w,this,h)
    }  
    }
    
    
    
    
    
    
    
    
   