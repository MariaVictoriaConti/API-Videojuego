// Importamos Character
import { Character } from './Character'


// Creacion de la clase MAge
export class Mage extends Character {
    private _poderMagico: number;
    private _mana: number; 

    // Para el constructor lo único que se pide es el nombre. Poder magico y mana se ponen ya de forma predeterminada.
    constructor(name: string) {
        super(name);
        this._poderMagico = 50;
        this._mana = 100;
    }

    // MEtodos getter y setter
    public get poderMagico() {
        return this._poderMagico
    }

    public get mana(){
        return this._mana
    }

    public set poderMagico(value:number){
    this._poderMagico = value
    }

    public set mana(value : number) {
        this._mana = value;
    }

    // Metodo atacarContrincante: con cada ataque que realiza, pierde puntos de health.
    public atacarContrincante(): void {
        if(this._mana >= 30 && this._mana <= 49){
            console.log(`${this.name} lanza un ataque Magico que disminuye la salud del rival.`);    
        }else if(this._mana >49 && this._mana <= 69){
            console.log(`${this.name} lanza un ataque Magico que disminuye la salud del rival.`);            
        }else if(this._mana > 69){
            console.log(`${this.name} lanza un ataque Magico que derrota al rival eliminando toda su salud en un solo hechizo.`);            
        }
    }

    // Metodo recibirAtaqueSinDefensa, cuando Character es atacado desprevenido. Resta más puntos de health.
    public recibirAtaqueSinDefensa():void{
        console.log(`${this.name} es atacado desprevenidamente... y su salud y mana disminuye.`);
        if(this.health > 0){
            this.health -= 30;      
            this._mana -= 20;  
        }else if(this.health <= 0){
            console.log(`${this.name} ha sido derrotado. SUPERASTE LA MISION!`);            
        }
    }

    // Metodo recibirAtaqueConDefensa, cuando Character se defiende de los ataques de su oponente. 
    public recibirAtaqueConDefensa():void{
        console.log(`${this.name} es atacado pero se defiende con una burbuja magica y no afecta su salud ni su mana.`);
    }

}
