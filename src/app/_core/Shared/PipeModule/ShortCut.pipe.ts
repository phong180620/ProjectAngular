import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    // ten nay dung no de format kieu len giao dien
    name: 'shortcut'
})

export class ShortCutPipe implements PipeTransform {
    transform(value: any, limit: number): any {
        return value.length > limit ? value.substr(0, limit) + '...'
            : value
    }
}

/*
    vi du 
    {{value | pipeName : params }}
    {{value | shortcut : 50 }}
    Lorem is sumlum color , sit amet consectetur adpipisicing
    elit. Eveniet quaerat veninam fuga , amet quasi id expedita at,
    asperiotes beatea , veriatatis repellat qui recuntandae pariatur quispam quia aspernatur?
    Reiciendis   , quen beatae.
*/