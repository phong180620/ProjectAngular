import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'app-directive',
    template: `
        <div class="container" style="margin-bottom: 500px;">
            <h3 class="dis-play">Structural (directive angular cung cap)</h3>
            <h3>*ngif</h3>
            <nav class="nav bg-dark text-white " >
                <a *ngIf="!isLogin; else temLogin"  class="nav-link active text-white" href="#" (click)="Login()">Login</a>
                <!-- <a *ngIf="isLogin" class="nav-link active text-white" href="#" >Hello {{userName}}</a> -->

            </nav>



            <ng-template  #temLogin>
                <a *ngIf="isLogin" class="nav-link active text-white" href="#" >Hello {{userName}}</a>

            </ng-template>

            <hr/>
            <div class="form-group">
                <p> Nhập số</p>
                <input class="form-control w-25" [(ngModel)]="number"/>
            </div>
            <div class="alert alert-success">
                <p *ngIf="number%2===0">Số chẳn</p>
                <p *ngIf="number%2!==0">Số lẻ</p>

            </div>

            <h3>*ngSwitchCase</h3>

            <select [(ngModel)]="color" class="form-control w-25">
                    <option value="red">Red</option>
                    <option value="green">Green</option>
                    <option value="blue">Blue</option>
                    <option value="orange">Orange</option>

            </select>
            <div [ngSwitch]="color">
                    <p style="color: red;" *ngSwitchCase="'red'">Red</p>
                    <p style="color: green;" *ngSwitchCase="'green'">Green</p>
                    <p style="color: blue;" *ngSwitchCase="'blue'">Blue</p>
                    <p style="color: orange;" *ngSwitchCase="'orange'">Orange</p>

            </div>

            <hr/>
            <h3>*ngFor</h3>
            <div class="row">
              <ng-container *ngIf="arrUser.length!==0">
                <div class="col-4" *ngFor="let User of arrUser; let index=index">
                    <div class="card">
                        <img [src]="User.avatar" alt="..." />
                        <div class="card-body">
                            <p>Id: {{index+1}}</p>
                            <p>Name:{{User.userName}}</p>
                            <p>Pass word:{{User.passWord}}</p>
                            <p>Email:{{User.email}}</p>
                        </div>

                    </div>
                </div>
              </ng-container>
            </div>
            <hr/>
            <h3>ng-content</h3>
            <app-demo-ngcontent>
              <img class="logo" src="https://picsum.photos/50/50" alt="..."  />
              <h3 class="title">Cybersoft</h3>
            </app-demo-ngcontent>

          <hr/>
          <h3>ng-class</h3>
          <p [ngClass]="{'mau-chu':mauChu,'font-chu':fontChu}">css html angular cybersoft</p>

          <table class="table">
            <thead>
              <tr>
                <th>Id</th>
                <th>user name</th>
                <th>avatar</th>
                <th>passWord</th>
                <th>Email</th>

              </tr>
            </thead>
            <tbody>

              <tr [ngClass]="{'bg-dark text-white':(index+1)%2==0}" *ngFor="let User of arrUser; let index=index">
                <td>{{index+1}}</td>
                <td>{{User.userName}}</td>
                <td><img src={{User.avatar}} width="50" height="50" alt=""/></td>
                <td>{{User.passWord}}</td>
                <td>{{User.email}}</td>
              </tr>
            </tbody>
          </table>

          <hr/>

          <h3>*ngStyle</h3>
          <div [ngStyle]="{'background-image':backgroundImg}" style="height:300px">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex quos laboriosam error, quo quas volumtatum impedit
          </div>

          <hr/>
          <h3>Bai tap</h3>
          <p [ngStyle]="{'font-size':fontSize+'px'}">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores ex quos laboriosam error, quo quas volumtatum impedit</p>
          <button class="m-2 btn btn-outline-success" (click)="tangFont()">+</button>
          <button class="m-2 btn btn-outline-success"(click)="giamFont()">-</button>

          <hr/>
          <h3>Bai Tap Login</h3>
          <app-bt-directive></app-bt-directive>
          <hr/>
          <h3>Bai Tap Quản Lý Sản Phẩm</h3>
          <app-bt-qlsp></app-bt-qlsp>

        </div>

    `,
    styles: [
        `
        .mau-chu{
          color:red
        }
        .font-chu{
          font-size:25px
        }

      `

    ]
})

export class DirectiveComponent implements OnInit {

    fontSize: number = 17;
    backgroundImg: string = 'url("https://picsum.photos/200/200")';

    mauChu: boolean = true;
    fontChu: boolean = false;

    tangFont() {
        this.fontSize = this.fontSize + 1;
    }

    giamFont() {
        this.fontSize = this.fontSize - 1;


    }

    color: string = "red";
    userName: string = 'PhongDepTrai';
    isLogin: boolean = false;

    number: number = 5;

    arrUser: User[] = [
        { userName: 'phongdeptrai', passWord: '290599', email: "phong@gmail.com", avatar: "https://i.pravatar.cc?u=phong" },
        { userName: 'Khoa', passWord: '2901231599', email: "khoa@gmail.com", avatar: "https://i.pravatar.cc?u=khoa" },
        { userName: 'Lam', passWord: '123123111', email: "lam@gmail.com", avatar: "https://i.pravatar.cc?u=lam" },
    ]

    Login() {
        this.isLogin = true;
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
