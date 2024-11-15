//Enum de poderes que pude elegir el personaje
export enum PODERES {
    SUPERSALTO = "SUPERSALTO",
    SUPERVELOCIDAD = "SUPERVELOCIDAD",
    PIZZABOOMERANG = "PIZZABOOMERANG",
}

//Creación de la clase Character
export class Character{
    private _name: string;
    private _level: number;
    private _health: number;
    private _experience: number;
    public _inventory: string[];
    public _listaMisiones: string[];

// Para el constructor lo único que se pide es el nombre. Level, health y experience se ponen ya de forma predeterminada.
    constructor(name: string) {
        this._name = name;
        this._level = 1;
        this._health = 100;
        this._experience = 0;
        this._inventory = [];
        this._listaMisiones = []; 
    }

// Metodos getter
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

// Métodos setter
    public set name(value:string){
        this._name = value;
    }

    public set level(value:number){
        if (value > 0) {
            this._level = value;
        }
    }

    public set health(value:number){
        if (value > 0) {
            this._health = value;
        }
    }

    public set experience(value:number){
        if (value > 0) {
            this._experience = value;
        }
    }

    public set inventory(value:string[]){ // REVISAR 
        this._inventory = [];
    }

    public set listaMisiones(value:string){
        this.name = value;
    }

// Metodo atacarContrincante: con cada ataque que realiza, pierde puntos de health.
    public atacarContrincante(): void {
        console.log(`${this.name} ataca a su oponente...`);
        this._health -= 20
        if(this.health<=0){
            console.log(this.name + " GAME OVER");        
        } else {
            console.log(this._name + " pierde 20 de salud por atacar. Su salud actual es: " + this._health);        
        } 
    }

// Metodo recibirAtaqueSinDefensa, cuando Character es atacado desprevenido. Resta más puntos de health.
    public recibirAtaqueSinDefensa(): void {
        if (this.health <= 0) {            
            console.log(`${this._name} has sido derrotado!`); 
            console.log(this.name + ": GAME OVER");
        } else if (this.health >= 29) {
            this.health -= 30;        
            console.log(`${this.name} es atacado desprevenidamente.. y su salud disminuye a ${this.health}..`);
        }
    }

// Metodo recibirAtaqueConDefensa, cuando Character se defiende de los ataques de su oponente. 
    public recibirAtaqueConDefensa():void{
        if(this._health>=0){
            console.log(`${this.name} es atacado pero se defiende y no afecta su salud.`);
        }else{
            console.log("game over");
        }
    }
}
