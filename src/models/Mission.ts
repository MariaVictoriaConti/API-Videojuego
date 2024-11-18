// Enum para elegir el tipo de mision
export enum MissionType {
    Main = "Main",
    Side = "Side",
    Event = "Event",
}

// Creacion de clase Mission
export class Mission {
    private _description!: string;
    private _difficulty!: number;
    private _reward!: number;
    private _typeMission!: MissionType;

    // Para inicializarla solo usamos el tipo de mision
    constructor(tipo: MissionType) {
        this._typeMission = tipo;
    }

    // Metodos getter
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

    // Metodos setter
    public set typeMission(value: MissionType) {
        this._typeMission = value;
    }

    public set description(value: string) {
        this._description = value;
    }

    public set difficulty(value: number) {
        if (value > 0) {
            this._difficulty = value;
        }
    }

    public set reward(value: number) {
        if (value > 0) {
            this._reward = value;
        }
    }

    // Metodo para ver los detalles de las misiones disponibles
    public setDetallesMision() {
        if (this.typeMission == MissionType.Main) {
            this._description = "Derrotar a Enemigo para rescatar a la Princesa Peach."
            this._difficulty = 2
            this._reward = 10
        } else if (this.typeMission === MissionType.Side) {
            this._description = "Derrotar a Enemigo que intenta tomar el poder total del reino Champignon y destruir a todo el pueblo."
            this._difficulty = 3
            this._reward = 20
        } else if (this.typeMission === MissionType.Event) {
            this._description = "Recolectar la mayor cantidad de estrellas posibles que te daran energia para completar tu salud al 100% y poder derrotar a los archienemigos en las otras misiones."
            this._difficulty = 4
            this._reward = 30
        }
    }
}
