import { Character } from './Character'

export enum PODERMAGICO {
    uno = "congelamiento", 
    dos = "quitaVision", 
    tres = "fatalati",
}

export class Mage extends Character {
    private _poderMagico: PODERMAGICO;
    private _mana: number; 

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

    public atacarContrincante(): void {
        if(this._mana >= 30 && this._mana <= 49){
            console.log(`${this.name} lanza su ataque Magico ${PODERMAGICO.uno} que disminuye la salud del rival.`);    
        }else if(this._mana >49 && this._mana <= 69){
            console.log(`${this.name} lanza su ataque Magico ${PODERMAGICO.dos} que disminuye la salud del rival.`);            
        }else if(this._mana > 69){
            console.log(`${this.name} lanza su ataque Magico ${PODERMAGICO.tres} que derrota al rival eliminando toda su salud en un solo hechizo.`);            
        }
    }

    public recibirAtaqueSinDefensa():void{
        console.log(`${this.name} es atacado desprevenidamente... y su salud y mana disminuye.`);
        if(this.health > 0){
            this.health -= 30;      
            this._mana -= 20;  
        }else if(this.health <= 0){
            console.log(`${this.name} ha sido derrotado. SUPERASTE LA MISION!`);            
        }
    }

    public recibirAtaqueConDefensa():void{
        console.log(`${this.name} es atacado pero se defiende con una burbuja magica y no afecta su salud ni su mana.`);
    }

}
