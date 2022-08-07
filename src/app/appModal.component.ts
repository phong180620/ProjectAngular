import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { FilmsService } from './_core/Services/Films.service';

@Component({
    selector: 'app-modal',
    template: `

        <!-- Button trigger modal -->
        <!-- <button type="button" class="btn btn-primary btn-lg" data-toggle="modal" data-target="#modelId1">
          Launch
        </button> -->
        
        <!-- Modal -->
        <div class="modal fade" id="modelId1" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog" role="document">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">{{phimModal.tenPhim}}</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                    </div>
                    <div class="modal-body">
                        <img [src]="phimModal.hinhAnh" alt="..." class="w-100">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    
    `
})

export class ModalComponent implements OnInit, OnDestroy {
    phimModal: any = {
        tenPhim: 'Default', hinhAnh: 'https://picsum.photos/200/200'
    }


    subModal!: Subscription // bien nay quan ly observable bien nay dong vai tro thuoc doi tuong cua rxjs 


    // store: Store<{modalReducer:FilmModal}> lay reducer tu StoreModule. nam  ben trong app.module
    constructor(private filmService: FilmsService, private store: Store<{ modalReducer: FilmModal }>) { }



    // lay ve du lieu tu service thong qua ngOninit giong nhu component didmount
    ngOnInit() {
        //  neu ma cai behaviorSubject  bi tac dong  thay doi gia tri ben trong cua no thi thang subscribe se chay lai va cap nhat lai cho minh
        this.filmService.dataModal.subscribe((dataModal) => {
            // ham subscribe chay moi khi state modal bi thay doi 
            this.phimModal = dataModal
        })

        // cach cung ra uotput nhu cach tren va phai trung ten thang Store 
        this.store.select('modalReducer').subscribe((result) => {
            console.log('result', result),
                this.phimModal = result
        })
    }

    // khi giao dien bien khoi  giao dien ta se huy theo doi bien do de cho no khoi chay  ngam
    ngOnDestroy(): void {
        //Unsub tat ca cac bien observable khi component mat khoi giao dien
        if (this.subModal) {
            this.subModal.unsubscribe()
        }
    }
}

interface FilmModal {
    maPhim: string;
    tenPhim: string;
    hinhAnh: string
}