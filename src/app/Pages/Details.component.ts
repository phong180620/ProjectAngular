import { Component, OnDestroy, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { FilmsService } from '../_core/Services/Films.service';

@Component({
    selector: 'app-details',
    template: `
        <div class="container">
            ma phim : {{maPhim}}
            <div>
                <img src="{{filmDetail.hinhAnh}}" alt="">
            </div>
        </div>
        
    `
})

export class DetailsComponent implements OnInit, OnDestroy {

    maPhim: number = 0
    filmDetail: any = {}
    subParam!: Subscription
    subService!: Subscription

    //ActivatedRoute dung de lay param tu url
    constructor(private avtRoute: ActivatedRoute, private filmService: FilmsService, private title: Title) { }
    // ham nay se chay truoc khi component bi huy di 
    ngOnDestroy(): void {
        if (this.subParam) {
            this.subParam.unsubscribe()
        }
        if (this.subService) {
            this.subService.unsubscribe()
        }
    }

    ngOnInit() {
        // this.avtRoute.params.subscribe((params) => {
        //     this.maPhim = params['id'];
        //     //sau khi lay tham so tu url => goi service
        //     this.layThongTinPhim(this.maPhim);
        // })

        this.subParam = this.avtRoute.queryParams.subscribe((params) => {
            this.layThongTinPhim(params['maPhim'])
            this.title.setTitle(params['tenPhim'])
        })


    }
    layThongTinPhim(maPhim: number) {
        this.subService = this.filmService.getFilmDetail(maPhim).subscribe((result) => {

            this.filmDetail = result.content;
            console.log("result", result)
        }, (error) => {
            console.log('error', error)
        })

    }
}