class Piso {
constructor (x,y,ancho,alto){
var options = {
 isStatic: true
}
this.body = Bodies.rectangle(x,y,ancho,alto,options);
this.ancho = ancho;
this.alto = alto;
World.add(world,this.body);
}
display(){
var floor = this.body.position;
rectMode(CENTER);
fill("brown");
rect(floor.x,floor.y,this.ancho,this.alto);
}

}