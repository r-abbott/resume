import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { Experience } from '../experience/experience';
import { Project } from '../experience/project';
import { DataService } from '../data.service';
import { Skill } from './skill';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  @Input()
  skillListings : Skill[];

  ngOnInit() {
    
  }
}
