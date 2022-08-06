import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DirectiveUIComponent } from './DirectiveUI.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzRateModule } from 'ng-zorro-antd/rate';
import { AntDModule } from 'src/app/_core/Shared/AntDModule/AntD.Module';
import { MaterialModule } from 'src/app/_core/Shared/MaterialModule/Material.module';




@NgModule({

    declarations: [DirectiveUIComponent],
    imports: [CommonModule, FormsModule, AntDModule, MaterialModule],
    exports: [DirectiveUIComponent],


})
export class DirectiveUIModule { }
