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
            this._description = "Derrotar a Bowser para rescatar a la Princesa Peach."
            this._difficulty = 30
            this._reward = 20
        } else if (this._typeMission === MissionType.Side) {
            this._description = "Derrotar a Donkey Kong que intenta tomar el poder total del reino Champignon y destruir a todo el pueblo."
            this._difficulty = 10
            this._reward = 5
        } else {
            this._description = "Recolectar la mayor cantidad de estrellas posibles que te daran energia para completar tu salud al 100% y poder derrotar a los archienemigos en las otras misiones."
            this._difficulty = 5
            this._reward = 1
        }
        console.log(`${this.description}. Dificultad: ${this._difficulty}. Recompensa: ${this._reward}.\n`);
    }

}



//const mision1 = new Mission()
//mision1.setTypeMission = MissionType.Main
//console.log(mision1.description);
//console.log(mision1.difficulty);
//console.log(mision1.reward);



