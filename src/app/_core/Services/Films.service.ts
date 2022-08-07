import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Util/setting';
import { Film } from '../Models/Film';

@Injectable({ providedIn: 'root' })
export class FilmsService {

    //thuoc tinh quan ly du lieu modal popup(<app-modal></app-modal>>) con duoc goi la 1 cai store luu tru  1 cai state(property)
    storeModal = new BehaviorSubject({

        maPhim: 1, tenPhim: 'Default Behavior', hinhAnh: 'https://picsum.photos/200/200'
    })
    // cai nay la cai du lieu minh se lay ra ru dataModal va bien doi no thanh Observable
    dataModal = this.storeModal.asObservable()


    constructor(private httpClient: HttpClient) { }// httpClient giong axios dung de ket noi du lieu voi backend

    getFilms(): Observable<any> {


        //Cau hinh header
        let header = new HttpHeaders();
        header = header.set('TokenCybersoft', TOKEN_CYBERSOFT)

        // Goi api tuong tu axios tra ve  1 observable
        let obser = this.httpClient.get('https://movienew.cybersoft.edu.vn/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP01', { headers: header })

        return obser
    }

    getFilmDetail(maPhim: number): Observable<any> {
        //Cau hinh header
        let header = new HttpHeaders();
        header = header.set('TokenCybersoft', TOKEN_CYBERSOFT)

        // Goi api tuong tu axios tra ve  1 observable
        let obser = this.httpClient.get(`https://movienew.cybersoft.edu.vn/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${maPhim}`, { headers: header })

        return obser
    }

}