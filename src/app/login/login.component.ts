import { Component, OnInit, Inject,ViewEncapsulation } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Auth } from '../domain/auth';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  username = '';
  password = '';
  auth: Auth;
  constructor(@Inject('auth') private service, private router: Router) { }

  ngOnInit() {
  }
onSubmit(formValue){
  console.log(formValue.login);
  this.service
    .loginWithCredentials(formValue.login.username, formValue.login.password)
    .then(auth => {
      let redirectUrl = (auth.redirectUrl === null)? '/': auth.redirectUrl;
      console.log(redirectUrl);
      if(!auth.hasError){
        this.router.navigate([redirectUrl]);
        localStorage.removeItem('redirectUrl');
        location.reload();
      } else {
        this.auth = Object.assign({}, auth);
      }
    });
}
}
