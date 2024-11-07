// faltan setters

class Character {
    private _name: string;
    private _level: number;
    private _health: number;
    private _experience: number;
    private _inventory: string[];

    constructor(name: string, level: number, health: number, experience: number){
        this._name = name;
        this._level = level;
        this._health = health;
        this._experience = experience;
        this._inventory = []
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
}