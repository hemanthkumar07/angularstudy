import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titlecase'
})
export class TitlecasePipe implements PipeTransform {

  transform(value: string): string {
    let p=value[0].toUpperCase();
    let q=value.slice(1,)
    q=q.toLowerCase();
    let r=p+q
    return r;
  }

}
