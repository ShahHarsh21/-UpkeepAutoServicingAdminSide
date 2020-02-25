import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LogindataService } from '../logindata.service';
import { Router } from '@angular/router';
import { user } from 'src/app/user/user';

@Component({
  selector: 'app-login-display',
  templateUrl: './login-display.component.html',
  styleUrls: ['./login-display.component.css']
})
export class LoginDisplayComponent implements OnInit {
  loginForm:FormGroup;
  constructor( private _logindata:LogindataService, private _router:Router) { }

  ngOnInit() {

    this.loginForm=new FormGroup({
      email_id:new FormControl('harshshah942737@gmail.com',[Validators.required,Validators.email]),
      password:new FormControl('harsh123',[Validators.required])
    });
  }
  onLogin(){
    if(this.loginForm.get('email_id').value!=null){
    this._logindata.login(this.loginForm.value).subscribe(
      (x:user[])=>{
        if(x.length==1){
          localStorage.setItem('email_id',this.loginForm.get('email_id').value);
          this._router.navigate(['/nav']);
        }
        else{
          alert('invalid');
        }
      }
    );
  }
  else{
    alert('uname or password must not be empty');
  }
  }

}
