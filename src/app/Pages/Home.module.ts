import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AntDModule } from '../_core/Shared/AntDModule/AntD.Module';
import { MaterialModule } from '../_core/Shared/MaterialModule/Material.module';
import { AboutComponent } from './About.component';
import { ContactComponent } from './Contact.component';
import { HomeComponent } from './Home.component';
import { HomeTemplateComponent } from './HomeTemplate.component';

// Dinh nghia homeRoutes
import { RouterModule, Routes } from '@angular/router';
import { FilmsService } from '../_core/Services/Films.service';
import { DetailsComponent } from './Details.component';
import { FormComponent } from './Form.component';
import { DemoPipeComponent } from './DemoPipe.component';
import { PipeModule } from '../_core/Shared/PipeModule/Pipe.module';
import { DemoLifeCycleComponent } from './DemoLifeCycle/DemoLifeCycle.component';
import { ChildComponent } from './DemoLifeCycle/Child.component';
import { DemoBehaviorSubjectComponent } from './DemoBehavior/DemoBehavior.component';
import { ModalBehaviorComponent } from './DemoBehavior/ModalBehavior.component';
const homeRoutes: Routes = [

    {
        path: '', component: HomeTemplateComponent, children: [
            { path: '', component: HomeComponent },
            { path: 'about', component: AboutComponent },
            { path: 'contact', component: ContactComponent },
            { path: 'details/:id', component: DetailsComponent },
            { path: 'details', component: DetailsComponent },
            { path: 'form', component: FormComponent },
            { path: 'demopipe', component: DemoPipeComponent },
            { path: 'demolifecycle', component: DemoLifeCycleComponent },
            { path: 'demobehavior', component: DemoBehaviorSubjectComponent }
        ]
    },


]


@NgModule({

    declarations: [HomeComponent, AboutComponent, ContactComponent, HomeTemplateComponent, FormComponent, DemoPipeComponent, DemoLifeCycleComponent, ChildComponent, DemoBehaviorSubjectComponent, ModalBehaviorComponent],
    imports: [CommonModule, FormsModule, AntDModule, MaterialModule, PipeModule, RouterModule.forChild(homeRoutes)],
    exports: [],
    providers: [FilmsService], // khai bao service


})
export class HomeModule { }
