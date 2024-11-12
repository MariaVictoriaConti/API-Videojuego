import { Character } from './Character'

export enum SUPERPODER{
    LANZAFUEGO = "LANZAFUEGO",
}
export enum DEFENSA{
    CAPARAZONPROTECTOR = "CAPARAZON PROTECTOR",
}

export class Warrior extends Character {
    private _superPoder: SUPERPODER;
    private _defensa: DEFENSA; // 0 al 50

    constructor(name: string, superPoder: SUPERPODER, defensa: DEFENSA) {
        super(name);
        this._superPoder = superPoder;
        this._defensa = defensa;
    }

    
    public get superPoder(){
        return this._superPoder;
    }

    
    public get defensa(){
        return this._defensa;
    }
    
    
    public set superPoder(value : SUPERPODER) {
        this._superPoder = value;
    }

    
    public set defensa(value : DEFENSA) {
        this._defensa = value;
    } 
    
    public ataque():void{
        console.log(`${this.name} lanza su ataque con ${this._superPoder}..`);        
    }

    public recibirAtaqueSinDefensa():void{

        if(this.health <= 0){            
            console.log("El enemigo ha sido derrotado!!");            
        }else if(this.health > 0){
            this.health -= 30;        
            console.log(`${this.name} es atacado desprevenidamente.. y su salud disminuye a ${this.health}..`);
            console.log(this.health);

        }
    }
    public recibirAtaqueConDefensa():void{
        console.log(`${this.name} es atacado pero se defiende y no afecta su salud.`);
    }

}

/*
const Bowser = new Warrior("Bowser", SUPERPODER.LANZAFUEGO, DEFENSA.CAPARAZONPROTECTOR)
console.log(Bowser);


Bowser.recibirAtaqueSinDefensa()
console.log(Bowser);
*/








//Info RANDOM
//warrior ===> "Bowser" (el dragon, su archirrival)
//Caracteristicas q tal vez sirven tal vez no je
//ataque: lanzaFuego / lanza espinas de su caparazon
//defensa: se mete dentro de su caparazon de pinches