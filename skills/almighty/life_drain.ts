import {Skill} from "../../skill";
import {SkillEffects} from "../../skill_effects";

let lifeDrainEffect = new SkillEffects('hp', 'steal');

export class LifeDrain extends Skill {
    constructor() {
        super("Life Drain", "Weak Almighty HP drain attack to 1 foe", "Almi", 10, [120], 98, 0, [], [lifeDrainEffect], false, false, false, '');
    }
}