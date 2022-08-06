import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AntDModule } from 'src/app/_core/Shared/AntDModule/AntD.Module';
import { MaterialModule } from 'src/app/_core/Shared/MaterialModule/Material.module';
import { UserTemplateComponent } from './UserTemplate.component';

//Dinh nghia user router
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './Login.component';
import { RegisterComponent } from './Register.component';
const UserRoutes: Routes = [
    {
        path: '', component: UserTemplateComponent, children: [
            { path: '', component: LoginComponent },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent }
        ]
    }
]

@NgModule({
    declarations: [UserTemplateComponent, LoginComponent, RegisterComponent],
    imports: [CommonModule, FormsModule, AntDModule, MaterialModule, RouterModule.forChild(UserRoutes)],
    exports: [],


})
export class UsersModule { }
