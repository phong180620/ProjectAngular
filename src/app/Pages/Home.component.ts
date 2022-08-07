import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Film } from '../_core/Models/Film';
import { FilmsService } from '../_core/Services/Films.service';

@Component({
    selector: 'app-home',
    template: `
        <div class="container">
            <h3>Danh Sach Phim</h3>
            <div class="row">
                <div class="col-4" *ngFor="let film of films">
                    <div class="card ">
                        <img [src]="film.hinhAnh" alt="..."> 
                        <div class="card-body">
                            <p>{{film.tenPhim}}</p>
                            <p>{{film.moTa | shortcut:100}}</p>
                            <!-- cach 1 ghi theo dang binh thuong-->
                            <a class="btn btn-success" routerLink="/details/{{film.maPhim}}">Xem chi tiet</a>
                            <!-- cach 2 ghi theo property binding-->
                            <a class="btn btn-success" [routerLink]="['/details',film.maPhim]"]>Xem chi tiet</a>


                            <a class="btn btn-success" [routerLink]="['/details']" [queryParams]="{maPhim:film.maPhim,tenPhim:film.tenPhim}"]]>Xem chi tiet</a>
                            
                            <button class="btn btn-primary" data-toggle="modal" data-target="#modelId1" (click)="xemChiTiet(film)") >Xem chi tiet (popup)</button>

                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    
    
    `
})

export class HomeComponent implements OnInit {

    //tao 1 doi tuong de hung gia tri tra tu ngoninit thanh cong hoac that bai
    films: Film[] = []

    //DI : Dependecy
    constructor(private filmService: FilmsService, private store: Store<{}>) { }

    //ngOnInit la 1 lifecycle giong component didmount no se duoc chay sau khi template duoc khoi tao
    ngOnInit() {
        //subcribe o day no tuong tu nhu promise truyen vao hai tham so 1.thanh cong , tham so thu 2 2.That bai . hai tham so nay la function va thuong goi API o trong nay
        // con Promise thanh cong thi promise.then() , that bai thi promise.catch()
        this.filmService.getFilms().subscribe((result) => {
            // result.content tra ve 1 mang danh sach phim roi tai binding du lieu len template de no render len giao dien
            this.films = result.content;
            console.log('result', result)
        }, (error) => {
            console.log('error', { error })
        })

    }
    xemChiTiet(film: any) {
        // subscite la  lay du lieu ve , next la dua gia tri moi lam thay doi gia tri state cu di
        this.filmService.storeModal.next(film),

            //output giong cais tren
            this.store.dispatch({ type: 'XEM_CHI_TIET', film: film })
    }

}