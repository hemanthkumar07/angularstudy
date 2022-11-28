import { NgFor } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';
import { Search } from '@mui/icons-material';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  val : any
  transform(value: any[], input: string) {
    if (input) {
        input = input.toLowerCase();
        return value.filter(function (el: any) {   // <---- data type!
            return el.toLowerCase().indexOf(input) > -1;
        });
    }
    return value;
}

}