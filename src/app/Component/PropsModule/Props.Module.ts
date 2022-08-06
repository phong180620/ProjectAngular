import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductComponent } from './DemoInput/Product.component';
import { ProductListComponent } from './DemoInput/ProductList.component';
import { DemoViewChildComponent } from './DemoViewChild/DemoViewChild.component';
import { FormsModule } from '@angular/forms';



@NgModule({

    declarations: [ProductListComponent, ProductComponent, DemoViewChildComponent],
    imports: [CommonModule, FormsModule],
    exports: [ProductListComponent, DemoViewChildComponent],


})
export class PropsModule { }
