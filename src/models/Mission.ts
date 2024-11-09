// falta setters y conectar con enum

export enum MissionType {
    Main = "Main",
    Side = "Side",
    Event = "Event",
}

// https://www.typescriptlang.org/docs/handbook/enums.html

export class Mission {
    private _description!: string;
    private _difficulty!: number;
    private _reward!: number;
    private _typeMission!: MissionType;

    constructor() {
        //elimino los this. que no precisan ser inicializados
    }

    public get description(): string {
        return this._description;
    }

    public get difficulty(): number {
        return this._difficulty;
    }

    public get reward(): number {
        return this._reward;
    }

    public get typeMission(): MissionType {
        return this._typeMission;
    }

    public set setTypeMission(value:MissionType){
        this._typeMission = value;
        if (this._typeMission === MissionType.Main) {
            this._description = "bla bla bla"
            this._difficulty = 30
            this._reward = 20
        } else if (this._typeMission === MissionType.Side) {
            this._description = "blablabla"
            this._difficulty = 10
            this._reward = 5
        } else {
            this._description = "blablabla"
            this._difficulty = 5
            this._reward = 1
        }
        console.log(`${this.description}, con dificultad de ${this._difficulty} y una recompensa de ${this._reward}`);
    }

}

const mision1 = new Mission()
//mision1.setTypeMission = MissionType.Main
//console.log(mision1.description);
//console.log(mision1.difficulty);
//console.log(mision1.reward);



