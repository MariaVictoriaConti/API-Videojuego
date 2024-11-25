// Importamos Character
import { Character } from './Character'

// Enum de superpoderes
export enum SUPERPODER{
    LANZAFUEGO = "LANZAFUEGO",
}

// Enum de defensa
export enum DEFENSA{
    CAPARAZONPROTECTOR = "CAPARAZON PROTECTOR",
}

// Creacion clase Warrior
export class Warrior extends Character {
    private _superPoder: SUPERPODER;
    private _defensa: DEFENSA; 

    constructor(name: string, superPoder: SUPERPODER, defensa: DEFENSA) {
        super(name);
        this._superPoder = superPoder;
        this._defensa = defensa;
    }

// Metodos getter y setter
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

    // Metodos que heredad de la clase Character
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
