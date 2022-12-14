import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingModule } from './Component/DataBinding/Binding.modules';
import { DirectiveModule } from './Component/DirectiveModule/Directive.modules';
import { PropsModule } from './Component/PropsModule/Props.Module';
import { DirectiveUIModule } from './Component/DirectiveUI/DirectiveUI.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Pages/Home.component';
import { AboutComponent } from './Pages/About.component';
import { ContactComponent } from './Pages/Contact.component';
import { LoginComponent } from './Pages/Users/Login.component';
import { RegisterComponent } from './Pages/Users/Register.component';
import { HomeModule } from './Pages/Home.module';
import { UsersModule } from './Pages/Users/Users.module';
import { AdminModule } from './Pages/Admin/Admin.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HeaderInterceptor } from './_core/Guards/Author.interceptor';
import { ModalComponent } from './appModal.component';
import { StoreModule } from '@ngrx/store';
import { modalReducer } from './_core/NGRXStore/Reducers/Modal.Reducer';
// khai bao routing

let appRoutes: Routes = [

  { path: 'home', loadChildren: () => HomeModule },
  { path: '', loadChildren: () => HomeModule },
  { path: 'users', loadChildren: () => UsersModule },
  { path: 'admin', loadChildren: () => AdminModule }



  // { path: 'home', component: HomeComponent },
  // { path: 'about', component: AboutComponent },
  // { path: 'contact', component: ContactComponent },
  // { path: 'login', component: LoginComponent },
  // { path: 'register', component: RegisterComponent },
  // { path: '', component: HomeComponent },
  // { path: '**', redirectTo: '' }

]

@NgModule({

  declarations: [

    AppComponent,
    ModalComponent

  ],

  imports: [

    BrowserModule,

    AppRoutingModule,

    DataBindingModule,

    DirectiveModule,

    PropsModule,
    DirectiveUIModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    StoreModule.forRoot({
      modalReducer: modalReducer,


      //cac reducer khac ...

    }), //Module giup goi API v?? s??i API cho to??n b??? ???ng d???ng c???a m??nh

  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HeaderInterceptor, multi: true }
  ],

  bootstrap: [AppComponent]

})

export class AppModule { }