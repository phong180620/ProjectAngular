import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-data-binding',
    template: `
        <div class="container">
          <h1 class="display-4">DataBinding</h1>
          <h3>Oneway binding</h3>
          <p>1. Interpolation (Binding du lieu tu model -> view thong qua thuoc tinh voi dau cap ngoac nhon )</p>
          <p>tieu de : {{title}}</p>
          <input value={{title}}   />
          <p class="text-danger">2. property binding(binding dua tren thuoc tinh cua the thong qua [])</p>
          <div [innerHTML]="title"></div>
          <input [value]="title"  />
          <p>3. Event binding (thay doi du lieu tren giao dien thong qua xu ly thao tac tu nguoi dung) </p>
          <div class="form-group">
              <p>tieu de</p>
              <input class="form-control w-25" #tagInput /><br/>
               template varible <br/>

              <button class ="btn btn-success" (click)="changTitle(tagInput.value)"> chang title</button>



          </div>
          <h3>Two binding(binding du lieu 2 chieu tu dong )</h3>
          <input class="form-control text-primary" [(ngModel)]="title" />
          <table class="table">
                <thead>
                  <tr>
                    <th class="text-primary">id</th>
                    <th>name</th>
                    <th>img</th>
                    <th>price</th>
                    <th>quantity</th>
                    <th>total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr *ngFor="let Product of arrProduct ">
                      <td>{{Product.id}}</td>
                      <td>{{Product.name}}</td>
                      <td><img src={{Product.img}} width="50" height="50" alt=""></td>
                      <td>{{Product.price}}</td>
                      <td><input class="form-control"  [(ngModel)]="Product.quantity" /></td>
                      <td>{{(Product.quantity*Product.price).toFixed(2)}}</td>

                  </tr>
                </tbody>

          </table>

        </div>

  `
})

export class DataBindingComponent implements OnInit {
    // Du lieu muon hien thi duoc len giao dien  thi phai la thuoc tinh component
    title: string = 'abcxyzhihihi';

    arrProduct: Product[] = [
        { id: '1', name: 'IphoneX', price: 1000, img: 'https://picsum.photos/id/1/200/200', quantity: 15 },
        { id: '2', name: 'Iphone XS ', price: 1500, img: 'https://picsum.photos/id/2/200/200', quantity: 10 },
        { id: '3', name: 'Iphone XS Max', price: 2000, img: 'https://picsum.photos/id/3/200/200', quantity: 20 }
    ]

    constructor() { }

    ngOnInit() { }
    changTitle(newTitle: string) {
        this.title = newTitle;

    }


}
interface Product {
    id: string,
    name: string,
    price: number,
    img: string,
    quantity: number
}
