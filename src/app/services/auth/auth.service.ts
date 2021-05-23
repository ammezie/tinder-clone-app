import { Injectable } from '@angular/core';
import { environment } from "../../../environments/environment";
import { HttpClient } from "@angular/common/http";
import { Router } from "@angular/router";

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  private authUrl = environment.baseURL + 'auth';

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  register(formData : any) {
    return this.http.post(this.authUrl + '/register', formData);
  }

  registerCometChat(data : any) {
    return this.http.post('https://api-us.cometchat.io/v2.0/users', data, { headers: { appId: '3252038b2900b26', apiKey: 'fa74f7453b417fac8888a553be226ba7d24560a7' }});
  }

  loggedIn() {
    return !!localStorage.getItem('accessToken');
  }

  login(user : any) {
    return this.http.post(this.authUrl + '/login', user);
  }

  loginCometChat(uid : any) {
    return this.http.get('https://api-us.cometchat.io/v2.0/users/' + uid);
  }
}
