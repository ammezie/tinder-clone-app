import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})

export class UserService {
  private userUrl = environment.baseURL + 'auth/';
  
  constructor(private http: HttpClient) { }

  match(id: string) {
    return this.http.get(this.userUrl + 'matches/' + id);
  }

  single(id: string) {
    return this.http.get(this.userUrl + '/' + id);
  }

  all(id: string) {
    return this.http.get(this.userUrl + 'all/' + id);
  }

  like(data : any) {
    return this.http.post(this.userUrl + '/like', data);
  }
}
