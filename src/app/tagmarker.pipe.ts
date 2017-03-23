import { Pipe, PipeTransform } from '@angular/core';

import { Skill } from './skills/skill';

@Pipe({
  name: 'tagmarker'
})
export class TagMarkerPipe implements PipeTransform {

  transform(value: string, tags: Skill[]): string {
    if(!value) return value;
    if(value.length === 0) return value;

    tags.forEach(t => {
      value = value.replace(this.marker(t.tag),this.mark(t.name));
    })
    return value;
  }

  private marker(tag:string):string{
    return "["+tag+"]";
  }

  private mark(name:string):string{
    return "<span class='label label-primary'>" + name + "</span>";
  }

}
