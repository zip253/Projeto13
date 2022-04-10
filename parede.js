//Criando a classe
class paredes{

    //Constructor
    constructor(x,y,w,h){
        
        //Propriedades da parede
        var propriedadesP={
            isStatic:true
        }

            //Criando corpo
            this.body=Bodies.rectangle(x,y,w,h,propriedadesP)

                //Criando x,y,w,h
                this.x=x
                this.y=y
                this.w=w
                this.h=h

                    //Adicionando corpo ao mundo
                    World.add(world,this.body)
    }

    //Show
    show(){

        //Centralizando retângulo
        rectMode(CENTER);
            
            //Mudando a cor
            fill("yellow")


                //Desenhando retângulo
                rect(this.body.position.x,this.body.position.y,this.w,this.h)

    }


}

