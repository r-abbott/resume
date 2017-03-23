import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Experience } from './experience';
import { Skill } from '../skills/skill';
import { Project } from './project';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css']
})
export class ExperienceComponent implements OnInit{
  @Input()
  experience : Experience[];
  @Input()
  skills: Skill[];

  ngOnInit() {
    
  }    
}
