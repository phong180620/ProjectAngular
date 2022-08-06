import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { ProductComponent } from './Product.component';

@Component({
  selector: 'app-product-list',
  template: `
      <div class="container">
        <div class="row">
            <div class = "col-4" *ngFor="let User of arrUser" >
              <!-- $event trong ham viewDetailParent o day chinh la chinh ra gia tri ban muon dua ra tu component con ra ngoai chinh la thang (this.userInput) trong ham vewDetail cua component con neu dat ten bien khac $event thi ban se lay duoc gia tri cua userInput-->
                <app-product (eventViewDetail)="viewDetailParent($event)" [userInput]="User"></app-product>
            </div>
        </div>
        <div class="form-group">
            <p>Pass word</p>
            <input  class="form-control"  #pass />
            <button class="btn btn-outline-danger" (click)="changePassWord(pass.value)">Change passWord</button>

        </div>

        <div>
          <h3>Thông tin chi tiết</h3>
          <div class="row">
            <div class="col-4">
              <img [src]="userDetail.avatar" width='220px' height='300px'>
            </div>
            <div class="col-8">
              <h3>Thông tin tài khoản</h3>
                <table class="table">
                  <thead>
                    <tr>
                      <th>UserName</th>
                      <th>{{userDetail.userName}}</th>
                    </tr>
                    <tr>
                      <th>Email</th>
                      <th>{{userDetail.email}}</th>
                    </tr>
                    <tr>
                      <th>Password</th>
                      <th>{{userDetail.passWord}}</th>
                    </tr>
                  </thead>
                </table>
            </div>
          </div>
        </div>
      </div>


  `
})

export class ProductListComponent implements OnInit {

  @ViewChildren(ProductComponent) lstTagProduct!: QueryList<ProductComponent>

  arrUser: User[] = [
    { userName: 'phongdeptrai', passWord: '290599', email: "phong@gmail.com", avatar: "https://i.pravatar.cc?u=phong" },
    { userName: 'Khoa', passWord: '2901231599', email: "khoa@gmail.com", avatar: "https://i.pravatar.cc?u=khoa" },
    { userName: 'Lam', passWord: '123123111', email: "lam@gmail.com", avatar: "https://i.pravatar.cc?u=lam" },
  ]

  userDetail: User = this.arrUser[0];

  viewDetailParent(userDetail: User) {
    this.userDetail = userDetail;
  }

  changePassWord(newPassword: string) {
    //truy xuất đến các thẻ <app-product></app-product> => dùng vòng lặp để duyệt từng thẻ và 
    // thay đổi giá trị thuộc tính this.userInput của thẻ
    this.lstTagProduct.forEach((tagProduct: ProductComponent, index: number) => {

      if (tagProduct.userInput.userName === 'phongdeptrai') {
        tagProduct.userInput.passWord = newPassword;
      }

    })

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

