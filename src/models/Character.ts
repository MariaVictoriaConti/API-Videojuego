// faltan setters
import { MissionType, Mission } from "./Mission";

//Agrego poderes para el inventario
export enum PODERES {
    SUPERSALTO = "SUPERSALTO",
    SUPERVELOCIDAD = "SUPERVELOCIDAD",
    PIZZABOOMERANG = "PIZZABOOMERANG",
}

//En vez de heredar use la clase mission directamente, como q la instancie dentro de un atributo
export class Character {
    private _name: string;
    private _level: number;
    private _health: number;
    private _experience: number;
    public _inventory: string[];
     public _listaMisiones: string[];


    constructor(name: string) {

        this._name = name;
        this._level = 1;
        this._health = 100;
        this._experience = 0;
        this._inventory = [];
         this._listaMisiones = []; 
    }

    public get name(): string {
        return this._name;
    }

    public get level(): number {
        return this._level;
    }

    public get health(): number {
        return this._health;
    }

    public get experience(): number {
        return this._experience;
    }

    public get inventory(): string[] {
        return this._inventory;
    }
  

    public set name(value:string){
          this._name = value;
    }
    public set level(value:number){
        this._level = value;
  }
  public set health(value:number){
    this._health = value;
}
public set experience(value:number){
    this._experience = value;
}

public set inventory(value:string[]){
    this._inventory = [];
}
public set listaMisiones(value:string){
    this.name = value;
}

public atacarContrincante():void{
    console.log(`${this.name} ataca..`);    
}
public recibirAtaqueSinDefensa():void{
    if(this.health < 29){            
        console.log(`${this._name} ha sido derrotado!`);            
    }else if(this.health >= 29){
        this.health -= 30;        
        console.log(`${this.name} es atacado desprevenidamente.. y su salud disminuye a ${this.health}..`);
        console.log(this.health);

    }
}
public recibirAtaqueConDefensa():void{
    console.log(`${this.name} es atacado pero se defiende y no afecta su salud.`);
}
}


//const personaje1 = new Character("coco")
//  console.log(personaje1); 
// personaje1.asignarMision(MissionType.Main);
// personaje1.asignarMision(MissionType.Side)
// console.log(personaje1.listarMisiones)
// personaje1.inventory = PODERES.PIZZABOOMERANG
// console.log(personaje1.listarMisiones)
// console.log(personaje1);

// personaje1.inventory = PODERES.PIZZABOOMERANG



