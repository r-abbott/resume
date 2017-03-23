import { Component, OnInit } from '@angular/core';

import {Resume} from './resume';
import {DataService} from '../data.service';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css']
})
export class ResumeComponent implements OnInit {
  resume: Resume;

  constructor(private _dataService: DataService) { }

  ngOnInit() {
    this._dataService.getResume()
      .subscribe(
        res => this.resume = res,
        err=>console.error(err));
  }

}
