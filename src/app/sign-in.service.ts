import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable() 

export default class SignInService {
    constructor(private http: HttpClient){}

    sendPost(value: any) {
        const url = 'http://localhost:3000/sign-in';
        const headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this.http.post(url, value, { headers }).toPromise().then(res => res)
    }
}