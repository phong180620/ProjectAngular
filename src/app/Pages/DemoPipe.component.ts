import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-demo-pipe',
    template: `
        <div>
            Demo Pipe <br/>
            {{hoTen | uppercase}}
            <p>
                {{hoTen | lowercase}}
            </p>
            <p>
                {{number | number}}
            </p>
            <p>
                {{money | number:'4.5-10'}}
            </p>
            <p>
                 <!-- nhan cho 100 roi gan dau % vao  -->
                {{percent | percent}}
            </p>
            <p>
                {{sinhhVien | json}}
            </p>
            <p>
                {{newDate | date : 'dd/MM/YYYY'}}
            </p>
            <p>
                {{newDate | date : 'dd-MM-YYYY'}}
            </p>
            <p>
                {{newDate | date : 'dd-MM-YYYY hh:mm:ss'}}
            </p>

            <p>
                {{newDate | date : 'dd-MM-YYYY hh:mm:ss a '}}
            </p>


        </div>
    `
})

export class DemoPipeComponent implements OnInit {
    hoTen: string = 'Nguyen Van A '
    number: number = 100000000;
    money: number = 98.37;
    percent: number = 0.55;
    sinhhVien: any = { ma: 1, ten: 'Nguyen Van A' }
    newDate: Date = new Date()
    constructor() { }

    ngOnInit() { }
}