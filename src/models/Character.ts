// faltan setters
import { MissionType, Mission } from "./Mission";

export class Character extends Mission{
    private _name: string;
    private _level: number;
    private _health: number;
    private _experience: number;
    private _inventory: string[];
    public _listaMisiones!: string[];


    constructor(name: string, level: number, health: number, experience: number,typeMission: MissionType){
        super(typeMission)
        this._name = name;
        this._level = level;
        this._health = health;
        this._experience = experience;
        this._inventory = [];
        this._listaMisiones! = [];

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

public set asignarMision(value: MissionType) {
    super.detalleMisionElegida
    this._listaMisiones.push(value)
}

public get listarMisiones():string[]{
    return this._listaMisiones;
}


}

//VER PORQUE AL CREAR PERSONAJE PONEMOS UN TYPEMISSION Y NO LO TOMA Y SI TOMA AL MOMENTO DE A
const personaje1 = new Character("coco", 1, 100, 20, MissionType.Side)
personaje1.asignarMision = MissionType.Event
console.log(personaje1.listarMisiones)
