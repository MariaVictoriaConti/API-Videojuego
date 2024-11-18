import { Character } from './Character'

export enum SUPERPODER{
    LANZAFUEGO = "LANZAFUEGO",
}

export enum DEFENSA{
    CAPARAZONPROTECTOR = "CAPARAZON PROTECTOR",
}

export class Warrior extends Character {
    private _superPoder: SUPERPODER;
    private _defensa: DEFENSA; 

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
