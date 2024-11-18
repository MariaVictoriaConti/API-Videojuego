export class Enemy {
    private _name: string;
    private _poder: string;
    private _health: number;
    private _defense: string;

    constructor(name: string, poder: string, health: number, defense: string) {
        this._name = name;
        this._poder = poder;
        this._health = health;
        this._defense = defense;
    }

    public get name(): string {
        return this._name
    }

    public set name(value: string) {
        this._name = value;
    }
    public get poder(): string {
        return this._poder
    }

    public set poder(value: string) {
        this._poder = value;
    }

    public get health(): number {
        return this._health
    }

    public set health(value: number) {
        this._health = value;
    }

    public get defense(): string {
        return this._defense
    }

    public set defense(value: string) {
        this._defense = value;
    }

    public atacarContrincante(): void {
        console.log(`\n💣 ${this.name} ataca...`);
        this._health -= 20
        if (this.health <= 0) {
            console.log("\n🔴 " + this.name + " GAME OVER");
        } else {
            console.log(this._name + " pierde 20 de salud por atacar. Su salud actual es: " + this._health);
        }
    }

    public recibirAtaqueSinDefensa(): void {
        if (this.health < 29) {
            this._health -= 30
            console.log(`${this._name} has sido derrotado!`);
            console.log("\n🔴 " + this._name + " GAME OVER");
        } else if (this.health >= 29) {
            this.health -= 30;
            console.log(`${this.name} es atacado desprevenidamente.. y su salud disminuye a ${this.health}.`);
        }
    }

    public recibirAtaqueConDefensa(): void {
        if (this._health >= 0) {
            console.log(`🛡️  ${this.name} es atacado pero se defiende y no afecta su salud.`);
        }
    }
}
