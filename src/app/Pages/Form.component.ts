import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-form',
    template: `
       <div class="container">
            <form #frmInfo="ngForm" (ngSubmit)="submit(frmInfo.value)">
                <h3> Form-validation</h3>
                <div class="form-group">
                    <p>Email</p>
                    <input [(ngModel)]="userInput.email" class="form-control" minlength="6" maxlength="32" #email="ngModel" name="email" ngModel required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                    <div *ngIf="(email.touched||email.dirty && email.errors)">
                        <p *ngIf="email.errors?.['required']" class="alert alert-danger">Email khong duoc bo trong</p>
                        <p *ngIf="email.errors?.['pattern']" class="alert alert-danger">Email khong dung dinh dang!</p>
                        <p *ngIf="email.errors?.['minlength']||email.errors?.['maxlength']" class="alert alert-danger">Email tu 6 den 32 ky tu!</p>

                    </div>
                </div>

                <div class="form-group">
                    <p>Name</p>
                    <input [(ngModel)]="userInput.name" class="form-control" name = "name" ngModel required/>
                </div>

                <div class="form-group">
                    <p>Schools</p>
                     <select [(ngModel)]="userInput.school" class="form-control" name ="school" ngModel required>
                        <option *ngFor="let school of schools" [value]="school.id">{{school.name}}</option>
                     </select>
                </div>
                <div class="form-group">
                    <button type="submit" [disabled]="frmInfo.invalid "  class="btn btn-outline-danger">Submit</button>
                </div>
            </form>
            <div class="mt-2">
                <table class="table">
                    <thead>
                        <tr>
                            <td>Email</td>
                            <td>Name</td>
                            <td>School</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        <ng-container *ngIf="!isEdit" >
                            <tr *ngFor="let user of arrUser">
                                <td>{{user.email}}</td>
                                <td>{{user.name}}</td>
                                <td>{{user.school}}</td>
                                <td>
                                    <button class="mr-2 btn btn-primary" (click)="edit(user)">Edit</button>
                                    <button class="mr-2 btn btn-success" (click)="setEdit()">Edit Element</button>
                                    <button class="ml-2 btn btn-danger" >Delete</button>
                                </td>

                            </tr>
                        </ng-container>
                        <ng-container *ngIf="isEdit" >
                            <tr *ngFor="let user of arrUser">
                                <td>{{user.email}}</td>
                                <td><input class="form-control" [(ngModel)]="user.name"></td>
                                <td><select class="form-control" [(ngModel)]="user.school">
                                    <option *ngFor="let school of schools" [value]="school.id">{{school.name}}</option>
                                </select></td>
                                <td>
                                    <button class="mr-2 btn btn-primary" (click)="edit(user)">Edit</button>
                                    <button class="mr-2 btn btn-success" (click)="setEdit()">Update</button>
                                    <button class="ml-2 btn btn-danger" >Delete</button></td>

                            </tr>
                        </ng-container>
                    </tbody>
                </table>
            </div>
        </div>
    
    `,
    styles: [`
        input.ng-invalid,select.ng-invalid{
            border-left:5px solid red;
        }
        input.ng-valid,select.ng-valid{
            border-left:5px solid green;
        }

    
    
    `]
})

export class FormComponent implements OnInit {

    @ViewChild('frmInfo') frmInfo!: NgForm;

    userInput: User = { name: '', email: '', school: '' }

    isEdit: boolean = false;

    arrUser: User[] = [
        { name: 'Phong', email: 'phongvan@gmail.com', school: '1' },
        { name: 'Tuan', email: 'tuan@gmail.com', school: '2' }

    ]

    schools: School[] = [
        { id: '1', name: 'Cybersoft' },
        { id: '2', name: 'Cyberlearn' },

    ]


    edit(userEdit: User) {
        // this.userInput = userEdit;
        this.frmInfo.setValue(userEdit)
    }
    setEdit() {
        this.isEdit = !this.isEdit
    }


    submit(values: User) {
        let userEdit = this.arrUser.find(user => user.email == values.email)
        if (userEdit) {
            userEdit.name = values.name;
            userEdit.school = values.school
        }
    }
    constructor() { }

    ngOnInit() { }
}
interface User {
    email: string,
    name: string,
    school: string

}
interface School {
    id: string,
    name: string
}