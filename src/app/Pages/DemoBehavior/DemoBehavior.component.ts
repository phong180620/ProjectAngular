import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/_core/Services/User.service';

@Component({
    selector: 'app-demo-behaviorsubject',
    template: `
        <div class="container">
            <h3>Demo behavior subject </h3>
            <div class="row">
                <div class="col-4" *ngFor="let user of arrUser">
                    <div class="card">
                        <img [src]="user.avatar" alt="...">
                        <div class="card-body">
                            <p>Name : {{user.name}}</p>
                            <p>Age: {{user.age}}</p> 
                        </div>
                        <div class="card-footer">
                            <button data-toggle="modal" data-target="#modelId" class="btn btn-outline-success" (click)="viewProfile(user)">View Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    
    `
})

export class DemoBehaviorSubjectComponent implements OnInit {
    arrUser: User[] = [
        { id: '1', name: 'Phong', avatar: 'https://i.pravatar.cc/200?u=1', age: 18 },
        { id: '2', name: 'Tuan', avatar: 'https://i.pravatar.cc/200?u=2', age: 20 },
        { id: '3', name: 'Khoa', avatar: 'https://i.pravatar.cc/200?u=3', age: 22 },
    ]
    constructor(private user: UserService) { }

    ngOnInit() { }

    viewProfile(userProfile: User) {
        this.user.changeModal(userProfile)
    }



}

interface User {
    id: string,
    name: string,
    avatar: string,
    age: number
}