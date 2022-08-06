import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DataBindingComponent } from './Binding.component';

// muon binding duoc du lieu 2 chieu phai dung module
import { FormsModule } from '@angular/forms';



@NgModule({

    declarations: [DataBindingComponent],// chua cac component
    imports: [CommonModule, FormsModule], // chua cac module su dung cho module nay
    exports: [DataBindingComponent],//

})
export class DataBindingModule { }
