import { NgModule } from '@angular/core';
import { ShortCutPipe } from './ShortCut.pipe';


@NgModule({
    declarations: [ShortCutPipe], // khai bao cac file minh dinh nghia 
    imports: [], // noi import nhung pipe module khac vao
    exports: [ShortCutPipe],// export cac pipe hoac pipe module cho file module khac su dung 

})
export class PipeModule { }
