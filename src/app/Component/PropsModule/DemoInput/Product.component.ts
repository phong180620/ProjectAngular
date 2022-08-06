import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  template: `
      <div class="card text-light">
        <img [src]="userInput.avatar" alt="...">
        <div class="card-body bg-dark">
          <p>Username: {{userInput.userName}}</p>
          <p>passWord: {{userInput.passWord}}</p>
          <p>Email: {{userInput.email}}</p>
          <button (click)="viewDetail()" class="btn btn-success"  >Xem chi tiết</button>
        </div>
      </div>


  `
})

export class ProductComponent implements OnInit {

  // input dùng để nhận giá trị tham số tại nơi sử dụng thẻ này
  @Input() userInput!: User
  @Output() eventViewDetail = new EventEmitter()

  viewDetail() {

    // Đưa nhiều tham số (thì đưa các tham số vào param hoặc object)

    let param: [User, boolean] = [this.userInput, true]

    let objectParam = {
      user: this.userInput,
      status: true,
    }
    this.eventViewDetail.emit(param)
    this.eventViewDetail.emit(objectParam)


    //Đưa dữ liệu ra ngoài thông qua phương thức emit no chi truyen
    this.eventViewDetail.emit(this.userInput)
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

