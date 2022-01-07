import {Item} from "./item";

export class DefenseItem extends Item {
    description: string; type: string; defenseType: string;
    multiTarget: boolean;

    constructor(name: string, description: string, type: string, defenseType: string, multiTarget: boolean){
        super(name);
        this.description = description;
        this.type = type;
        this.defenseType = defenseType;
        this.multiTarget = multiTarget;
    }
}