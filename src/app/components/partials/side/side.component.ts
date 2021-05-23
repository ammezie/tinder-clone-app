import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-side',
  templateUrl: './side.component.html',
  styleUrls: ['./side.component.css']
})
export class SideComponent implements OnInit {
  allMatches: any = [];
  user = JSON.parse(<string>localStorage.getItem('user'));
  users: any = [];

  constructor(
    private router: Router,
    private service: UserService
  ) { }

  ngOnInit(): void {
    this.matches();
  }

  logout() {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('user');
    this.router.navigate(['/']);
  }

  matches() {
    this.service
      .match(this.user._id)
      .subscribe((response: any) => {
        this.allMatches = response.data;

        this.allMatches.map((match : any) => {
          match.likes.forEach((like: any) => {
              let id = like.liked_id;
              this.service
                  .single(id)
                  .subscribe((response: any) => {
                      this.users.push(response.data);
                  })
          })
        })
      })
  }
}
