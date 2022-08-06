import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'a-user-template',
    template: `
   
        <div class="d-flex">
            <div class="w-50">
                <img style="height:100vh" src="https://picsum.photos/2000/2000" alt="...">
            </div>
            <div class="w-50">
                 <router-outlet></router-outlet>
            </div>
        </div>
        
  
    
    
    `
})

export class UserTemplateComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}