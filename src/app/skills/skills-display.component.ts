import { Component, Input } from '@angular/core';

import { Skill } from './skill';
import { SkillGroup } from './skillgroup';


@Component({
    selector: 'skills-display',
    templateUrl: './skills-display.component.html',
    styleUrls: ['./skills-display.component.css']
})
export class SkillsDisplayComponent{
    @Input() skills: Skill[];
    @Input() groupByType: boolean = false;

    getSkillsGroupedByType() : SkillGroup[]{
        var skillsGrouped: SkillGroup[] = [];
        
        this.skills.forEach(skill=>{
            var group = skillsGrouped.find(g=>g.type===skill.type);
            if(!group){
                group = new SkillGroup();
                group.type = skill.type;
                group.skills = [];
                skillsGrouped.push(group);
            }
            group.skills.push(skill);
        });
        return skillsGrouped;
    }
}