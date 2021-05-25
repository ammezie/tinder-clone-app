import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CometChat } from '@cometchat-pro/chat';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
})
export class WelcomeComponent implements OnInit {
  user: {};
  form: any = FormGroup;
  loginData: any = {};

  constructor(
    private service: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: [''],
      email: [''],
      phone: [''],
      password: [''],
      age: [''],
      gender: [''],
      location: [''],
      profile_photo: [''],
    });
  }

  profilePhoto(event: any) {
    const profile = event.target.files[0];
    this.form.get('profile_photo').setValue(profile);
  }

  add() {
    const formData = new FormData();

    formData.append('name', this.form.get('name').value);
    formData.append('email', this.form.get('email').value);
    formData.append('phone', this.form.get('phone').value);
    formData.append('password', this.form.get('password').value);
    formData.append('age', this.form.get('age').value);
    formData.append('gender', this.form.get('gender').value);
    formData.append('location', this.form.get('location').value);
    formData.append('profile_photo', this.form.get('profile_photo').value);

    this.service.register(formData).subscribe((response: any) => {
      this.user = response.data;
      this.getUser();
      localStorage.setItem('accessToken', response.data.accessToken);

      this.registerComet();
    });
  }

  getUser() {
    localStorage.setItem('user', JSON.stringify(this.user));
  }

  registerComet() {
    let user = JSON.parse(localStorage.getItem('user'));
    let name = user.name;
    let uid = name.replace(/\s/g, '');
    let data = { uid, name };

    this.service.registerCometChat(data).subscribe(() => {
      this.cometLogin(uid);
    });
  }

  cometLogin(uid) {
    const authKey = 'cdf0cba5238483562e204a0fe165724b974b2b13';

    CometChat.login(uid, authKey).then(
      (user) => {
        console.log('Login Successful:', { user });
        this.router.navigate(['/home']);
      },
      (error) => {
        console.log('Login failed with exception:', { error });
      }
    );
  }

  login() {
    this.service.login(this.loginData).subscribe(
      (data: any) => {
        this.user = data.data._doc;
        this.getUser();
        localStorage.setItem('accessToken', data.data.accessToken);

        const uid = data.data._doc.name.replace(/\s/g, '');
        this.cometLogin(uid);
      },
      (error) => {}
    );
  }
}
