import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ProductListComponent } from '../DemoInput/ProductList.component';

@Component({
  selector: 'app-demo-view-child',
  template: `

    <div class="container">
      <h3>Demo View Child</h3>
      <div class="form-group">
        <p>User name</p>
        <input id="userName" class="form-control"  #usName  [(ngModel)]="newUser.userName"/>
      </div>
      <div class="form-group">
        <p>passWord</p>
        <input id="passWord" class="form-control"  [(ngModel)]="newUser.passWord"/>
      </div>
      <div class="form-group">
        <p>Email</p>
        <input id="email" class="form-control"   [(ngModel)]="newUser.email"/>
      </div>
      <div class="form-group">
        <button class="btn btn-success" (click)="getUserName()">Get userName</button>
        <button class="btn btn-outline-success" (click)="addUser()">Add user</button>
      </div>

      <h3>Danh Sách User</h3>
      <app-product-list #tagProductList></app-product-list>
    </div>

  `
})

export class DemoViewChildComponent implements OnInit {


  newUser: User = { userName: "", passWord: "", email: "", avatar: "" }

  @ViewChild('usName') tagInput!: ElementRef // ElemrntRef là đối tượng html trong angular
  @ViewChild('tagProductList') tagProducList!: ProductListComponent // DOM tới đối tượng và thuộc tính của component ProductListComponent
  getUserName() {

    // this.tagInput.nativeElement.value = "hello Phong";
    // this.tagInput.nativeElement.style.color = 'red';


    console.log("check", this.tagProducList)
    this.tagProducList.arrUser = []; // Thay đổi giá trị gián tiếp của ProducList.component 


  }
  addUser() {

    let newUser = { ...this.newUser, avatar: "https://i.pravatar.cc?u=" + this.newUser.userName }
    this.tagProducList.arrUser.push(newUser)

  }
  constructor() { }


  ngOnInit() { }
}
interface User {
  userName: string
  passWord: string
  email: string
  avatar: string
}
