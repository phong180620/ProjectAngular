import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AntDModule } from 'src/app/_core/Shared/AntDModule/AntD.Module';
import { MaterialModule } from 'src/app/_core/Shared/MaterialModule/Material.module';
import { AdminTemplateComponent } from './AdminTemplate.component';

//Dinh nghia adminModule 
const adminRoutes: Routes = [
    {
        path: '', component: AdminTemplateComponent
    }
]

@NgModule({
    declarations: [AdminTemplateComponent],
    imports: [CommonModule, FormsModule, AntDModule, MaterialModule, RouterModule.forChild(adminRoutes)],
    exports: [],

})
export class AdminModule { }
