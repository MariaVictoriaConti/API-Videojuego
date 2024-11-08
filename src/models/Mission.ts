// falta setters y conectar con enum

enum MissionType {
    Main = "Main",
    Side = "Side",
    Event = "Event",
}

// https://www.typescriptlang.org/docs/handbook/enums.html

export class Mission {
    private _description: string;
    private _difficulty: number;
    private _reward: number;
    private _typeMission: MissionType;

    constructor(description: string, difficulty: number, reward: number, typeMission: MissionType) {
        this._description = description;
        this._difficulty = difficulty;
        this._reward = reward;
        this._typeMission = typeMission;
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

    // Prueba de setter
    public set asignarMision(value: MissionType) {
        if (value === MissionType.Main) {
            this._description = "bla bla bla"
            this._difficulty = 30
            this._reward = 20
        } else if (value === MissionType.Side) {
            this._description = "blablabla"
            this._difficulty = 10
            this._reward = 5
        } else {
            this._description = "blablabla"
            this._difficulty = 5
            this._reward = 1
        }
        console.log(`Tu misón es: ${this.description}, con dificultad de ${this._difficulty} y una recompensa de ${this._reward}`);
    }
}