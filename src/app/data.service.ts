import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

import { Resume } from './resume/resume';

@Injectable()
export class DataService {
  private _dataUrl = 'data/';

  constructor(private _http : Http) { }

  getResume(): Observable<Resume>{
    const file = 'resume.json'
    const url = this._dataUrl + file;
    return this._http.get(url)
      .map((res : Response) => <Resume> res.json())
      .catch(this.handleError);
  }

  private handleError(error: any){
    return Observable.throw(error);
  }
}
