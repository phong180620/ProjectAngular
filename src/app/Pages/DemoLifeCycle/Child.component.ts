import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
    selector: 'app-child',
    template: `
        <div class="card">
            <img [src]="product.image" alt="..." />
            <div class="card-body">
                <p>{{product.name}}</p>
                <p>{{product.price}}</p>
            </div>
        </div>
    
    `
})

export class ChildComponent implements OnInit, OnChanges, OnDestroy {
    @Input() product: any;
    constructor() {

        console.log('constructor child')
    }

    //ngOnchang no se la thang chay dau tien va sau thang constructor
    ngOnChanges(changes: SimpleChanges): void {
        // Moi khi input thay doi thi se duoc kich hoat(hoi giong didupdate ben react )
        console.log('On change child', changes)

    }
    ngOnInit() {
        // chay 1 lan dau tien sau khi cac component directive... duoc render(giong component didmount)
        console.log('ngOninit child')
    }

    ngOnDestroy(): void {
        // chay truoc khi giao dien component mat di(giong willunmount de huy cac bien observable hoac cac ham chay ngam)
        console.log('destroy component')
    }

}