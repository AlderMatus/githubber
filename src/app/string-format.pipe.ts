import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({name: 'format'})
@Injectable({
    providedIn: 'root'
})
export class StringFormatPipe implements PipeTransform {
    transform(value: string, ...args: string[]): string {
        let a : string = value;
        for (var k in args) {
            a = a.replace(new RegExp("\\{" + k + "\\}", 'g'), args[k]);
        }
        return a;
    }
}