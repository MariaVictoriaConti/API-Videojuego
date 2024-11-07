// falta setters y conectar con enum

enum MissionType {
    Main,
    Side,
    Event
}

// https://www.typescriptlang.org/docs/handbook/enums.html

class Mission {
    private _description: string;
    private _difficulty: number;
    private _reward: number;

    constructor(description: string, difficulty: number, reward: number) {
        this._description = description;
        this._difficulty = difficulty;
        this._reward = reward
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
}