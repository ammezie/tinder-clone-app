import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  users: any = [];
  allMatches: any = [];
  getUser: any = {};
  user = JSON.parse(<string>localStorage.getItem('user'));

  constructor(private service: UserService) {}

  ngOnInit(): void {
    this.all();
  }

  all() {
    this.service.all(this.user._id).subscribe((response: any) => {
      this.users = response.data;
      this.single();
    });
  }

  single() {
    this.getUser = this.users[Math.floor(Math.random() * this.users.length)];
  }

  matches() {
    this.service.match(this.user._id).subscribe((response: any) => {
      this.allMatches = response.data;
    });
  }

  like(liked_id: any) {
    let data = { user_id: this.user._id, liked_id, match: 0 };

    this.service.like(data).subscribe((response: any) => {
      this.user = response.data._doc;
      this.single();
    });
  }
}
