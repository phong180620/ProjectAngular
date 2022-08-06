import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from 'src/app/_core/Services/User.service';
import { ACCESS_TOKEN, USER_LOGIN } from 'src/app/_core/Util/setting';

@Component({
    selector: 'app-login',
    template: `
    
        <form #frmLogin="ngForm" (ngSubmit)="login(frmLogin?.['value'])" class="container">
            <h3>Login</h3>
            <div class="form-group">
                <p>User name</p>
                <input class="form-control" name="taiKhoan" ngModel>
            </div>
            <div class="form-group">
                <p>Pass work</p>
                <input class="form-control" name="matKhau" ngModel>
            </div>
            <div class="form-group">
                <button type="submit" class="btn btn-success">Login</button>
            </div>
        </form>
    
    `
})

export class LoginComponent implements OnInit {

    // de call api ta khai bao trong thang constructor khi khai bao trong constuctor xong thi ta co the call api trong cai ham ma ta muon xu ly
    constructor(private usService: UserService) { }
    login(values: any) {
        //call API
        this.usService.dangNhap(values).subscribe((result) => {
            console.log(result)
            // dang nhap thanh cong => luu vao localstorage
            localStorage.setItem(USER_LOGIN, JSON.stringify(result.content))
            localStorage.setItem(ACCESS_TOKEN, result.content.accessToken)

        }, (error) => {
            console.log(error)
        })
    }
    ngOnInit() { }
}