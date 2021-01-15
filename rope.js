class rope{
    constructor(body1,body2,offsetX,offsetY) {
        this.offsetX=offsetX;
        this.offsetY=offsetY;

      var opt={
         bodyA:body1,
         bodyB:body2,
         pointB: {x:this.offsetX, y:this.offsetY}
         
      }

      this.con = Matter.Constraint.create(opt);
      World.add(world,this.con);

      this.posx = offsetX;
      this.posy = offsetY;
    }
    display() {
        line(this.con.bodyA.position.x,this.con.bodyA.position.y,this.posx,
            this.con.bodyB.position.y)
    }
}