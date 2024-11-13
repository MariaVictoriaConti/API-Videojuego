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
    
public atacarContrincante(): void {
    super.atacarContrincante()
}

public recibirAtaqueSinDefensa(): void {
    super.recibirAtaqueSinDefensa()
    
}

public recibirAtaqueConDefensa(): void {
    super.recibirAtaqueConDefensa()
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