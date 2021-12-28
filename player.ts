import {Demon} from "./demon";

export class Player {
    name: string;
    hp: number; mp: number; str: number; vit: number; mag: number; agi: number; luc: number;
    demonList : Demon[];

    constructor(name: string) {
        this.name = name;
        this.hp = 51;
        this.mp = 68;
        this.str = 5;
        this.vit = 5;
        this.mag = 5;
        this.agi = 5;
        this.luc = 5;
        this.demonList = [];
    }

    getName(): string {
        return this.name;
    }

    getStat(stat: string): number {
        switch (stat.toLowerCase()) {
            case ("hp"):
                return this.hp;
            case ("mp"):
                return this.mp;
            case ("str"):
                return this.str;
            case ("vit"):
                return this.vit;
            case ("mag"):
                return this.mag;
            case ("agi"):
                return this.agi;
            case ("luc"):
                return this.luc;
            default:
                return 0;
        }
    }

    setStat(stat: string, newStat: number) {
        switch (stat.toLowerCase()) {
            case ("hp"):
                this.hp = newStat;
            case ("mp"):
                this.mp = newStat;
            case ("str"):
                this.str = newStat;
            case ("vit"):
                this.vit = newStat;
            case ("mag"):
                this.mag = newStat;
            case ("agi"):
                this.agi = newStat;
            case ("luc"):
                this.luc = newStat;
        }
    }

    addDemon(demon: Demon) {
        this.demonList.push(demon);
    }

    getDemonName(index: number): string {
        return this.demonList[index].name;
    }

    getDemonListLength(): number {
        return this.demonList.length;
    }
}