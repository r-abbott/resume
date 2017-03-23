import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { DateRange } from './daterange';

@Pipe({
  name: 'daterange'
})
export class DateRangePipe implements PipeTransform {

  constructor(private datePipe : DatePipe){}

  transform(value: DateRange, startDateOnly? : boolean, pattern?: string): string {

    if(!pattern){
      pattern = 'MMM yyyy'
    }

    var startDate = this.formatDate(value.startDate, pattern);
    var endDate;

    if(startDateOnly){
      return startDate;
    }

    if(!value.endDate){
      endDate = "Present";
    }
    else{
      endDate = this.formatDate(value.endDate, pattern);
    }

    return startDate + " - " + endDate;
  }

  private formatDate(date: Date, pattern?: string) : string{
    return this.datePipe.transform(date,pattern);
  }

}
