import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { DatePipe, DecimalPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { ExperienceComponent } from './experience/experience.component';
import { SkillsComponent } from './skills/skills.component';
import { SkillsDisplayComponent } from './skills/skills-display.component';
import { EducationComponent } from './education/education.component';
import { DataService } from './data.service';
import { DateRangePipe } from './daterange.pipe';
import { CapitalizePipe } from './capitalize.pipe';
import { ResumeComponent } from './resume/resume.component';
import { TagMarkerPipe } from './tagmarker.pipe';

@NgModule({
  declarations: [
    AppComponent,
    ExperienceComponent,
    SkillsComponent,
    SkillsDisplayComponent,
    EducationComponent,
    DateRangePipe,
    CapitalizePipe,
    ResumeComponent,
    TagMarkerPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    DataService,
    DatePipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
