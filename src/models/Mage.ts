import { Character } from './Character'

export enum PODERMAGICO {
    congelamiento, 
    quitaVision, 
    fatalati,
}
// const elegirPoder = Math.random()
// elegirPoder (): PODERMAGICO {
//     var key = Math.floor(Math.random() * Object.keys(PODERMAGICO).length / 2);
//     return PODERMAGICO[key];
//   }

export class Mage extends Character {
    private _poderMagico: PODERMAGICO; // 
    private _mana: number; // potencia del poder

    //como hacemos para que algunos atributos como level, experience, inventory y lista de misiones no aparezcan en los rivales?
    constructor(name: string, poderMagico: PODERMAGICO) {
        super(name);
        this._poderMagico = poderMagico;
        this._mana = 100;
    }

public get poderMagico() {
    return this._poderMagico
}

public get mana(){
    return this._mana
}

public set poderMagico(value:PODERMAGICO){
this._poderMagico = value
}

 
public set mana(value : number) {
    this._mana = value;
}


    public ataqueConPoderMagico():void{
        if(this._mana >= 30 && this._mana <= 49){
            console.log(`${this.name} lanza su ataque Magico ${PODERMAGICO.congelamiento} que disminuye en 30 la salud del rival..`);    
        }else if(this._mana >49 && this._mana <= 69){
            console.log(`${this.name} lanza su ataque Magico ${PODERMAGICO.quitaVision} que disminuye en 60 la salud del rival..`);            
        }else if(this._mana > 69){
            console.log(`${this.name} lanza un ataque Magico ${PODERMAGICO.fatalati} que derrota al rival eliminando toda su salud en un solo hechizo..`);            
        }
    }

    public recibirAtaqueSinDefensa():void{
        console.log(`${this.name} es atacado desprevenidamente.. y su salud y mana disminuye..`);
        if(this.health > 0){
            this.health -= 30;      
            this._mana -= 20;  
        }else if(this.health <= 0){
            console.log(`${this.name} ha sido derrotado.`);            
        }
    }

    public recibirAtaqueConDefensa():void{
        console.log(`${this.name} es atacado pero se defiende con una burbuja magica y no afecta su salud ni su mana.`);
    }

}

const mage = new Mage("Donkey Kong", PODERMAGICO.congelamiento)



//Info RANDOM
//Mage ===>Donkey Kong (el gorila) su archienemigo
//ataque: golpe al piso con puños que causa terremoto /golpe de puño
//defensa: superGrito del Gorila deja aturdido al rival y no se puede defender