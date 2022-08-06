import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ACCESS_TOKEN, TOKEN_CYBERSOFT } from '../Util/setting';

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
    constructor() { }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        let accessToken = 'tokenDefault';
        if (localStorage.getItem(ACCESS_TOKEN)) {
            accessToken = localStorage.getItem(ACCESS_TOKEN)!;
        }



        const headers = req.headers

            .set('accessToken', `Bearer ${accessToken}`)
            .set('TokenCybersoft', TOKEN_CYBERSOFT);
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}