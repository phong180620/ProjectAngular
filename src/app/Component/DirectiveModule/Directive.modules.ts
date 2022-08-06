import { CommonModule } from '@angular/common';// su dung cac directive for,if,switch...
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BaiTapDirecTiveComponent } from './BaiTapDirecTive.component';
import { BaiTapQLSPComponent } from './BaiTapQLSP.component';
import { DemoNgContentComponent } from './DemoNgContent.component';
import { DirectiveComponent } from './Directive.component';



@NgModule({
    declarations: [DirectiveComponent, DemoNgContentComponent, BaiTapDirecTiveComponent, BaiTapQLSPComponent], // chuac cac component
    imports: [CommonModule, FormsModule], // chua cac module su dung cho module nay
    exports: [DirectiveComponent],// export ra component can lay

})
export class DirectiveModule { }
