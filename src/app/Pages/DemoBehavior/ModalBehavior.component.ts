import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/Services/User.service';

@Component({
    selector: 'app-modal-behavior',
    template: `
        
        <!-- Modal -->
        <div class="modal fade" id="modelId" tabindex="-1" role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                        <div class="modal-header">
                                <h5 class="modal-title">Modal title</h5>
                                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                    </button>
                            </div>
                    <div class="modal-body">
                        <div class="container-fluid">
                          <p>{{userModal.name}}</p>
                          <img [src]="userModal.avatar" alt="...">
                        </div>
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

export class ModalBehaviorComponent implements OnInit {

    userModal!: User

    constructor(private user: UserService) { }

    ngOnInit() {
        // ket noi den service lay du lieu mac dinh ve component tu thuoc tinh behavior da duoc chuyen thanh observable
        this.user.userModal.subscribe((user: User) => {
            this.userModal = user
        })

    }
}
interface User {
    id: string,
    name: string,
    avatar: string,
    age: number
}