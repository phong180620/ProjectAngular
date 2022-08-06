import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { UserLogin } from '../Models/UserLogin.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Util/setting';


const stateUserDefault = { id: '1', name: 'Phong', avatar: 'https://i.pravatar.cc/200?u=1', age: 18 }

@Injectable({ providedIn: 'root' })
export class UserService {


    //khoi tao state tai service
    userBehavior = new BehaviorSubject(stateUserDefault)

    userModal = this.userBehavior.asObservable()

    constructor(private httpClient: HttpClient) { }

    changeModal(newState: User) {
        // phuong thuc next nhan vao (newState) thay doi cho state hien tai  
        this.userBehavior.next(newState)

    }


    dangNhap(user: UserLogin): Observable<any> {

        //cau hinh herder
        let header = new HttpHeaders();
        header = header.set('TokenCybersoft', TOKEN_CYBERSOFT)

        let obser = this.httpClient.post(`https://movienew.cybersoft.edu.vn/api/quanlynguoidung/dangnhap`, user, { headers: header })
        return obser

    }
}
interface User {
    id: string,
    name: string,
    avatar: string,
    age: number
}