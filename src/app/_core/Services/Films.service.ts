import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { TOKEN_CYBERSOFT } from '../Util/setting';
import { Film } from '../Models/Film';

@Injectable({ providedIn: 'root' })
export class FilmsService {
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