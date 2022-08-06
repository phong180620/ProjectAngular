import { Component, OnInit } from '@angular/core';

@Component({
    // phai goi ten selector ra mooi ddung duoc modal <app-modal-behavior></app-modal-behavior> goi bat cu noi dau trong ung dung app la dc
    selector: 'app-home-template',
    template: `
    
        <div>
            <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
                <a class="navbar-brand" href="#">Cybersoft</a>
                <button class="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId"
                    aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation"></button>
                <div class="collapse navbar-collapse" id="collapsibleNavId">
                    <ul class="navbar-nav mr-auto mt-2 mt-lg-0">
                        <li class="nav-item ">
                            <a class="nav-link" routerLinkActive="active" routerLink="/home">Home <span
                                    class="sr-only">(current)</span></a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLinkActive="active" routerLink="/login">Login</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLinkActive="active" routerLink="/register">Register</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLinkActive="active" [routerLink]="['/contact']">Contact </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLinkActive="active" routerLink="/demopipe">Demo Pipe</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" routerLinkActive="active" routerLink="/demolifecycle">Demo LifeCle</a>
                        </li>


                    </ul>
                    <form class="form-inline my-2 my-lg-0">
                        <input class="form-control mr-sm-2" type="text" placeholder="Search">
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>

            
            <router-outlet></router-outlet>
            <app-modal-behavior></app-modal-behavior>

            <footer>
                footer
            </footer>
        </div>
    
    `
})

export class HomeTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}