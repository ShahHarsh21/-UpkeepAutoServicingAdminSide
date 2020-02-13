import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, AbstractControl } from '@angular/forms';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-useradd',
  templateUrl: './useradd.component.html',
  styleUrls: ['./useradd.component.css']
})
export class UseraddComponent implements OnInit {
  adduser:FormGroup;

  constructor(public _data:UserdataService,private _router:Router) { }

  ngOnInit() {

    this.adduser= new FormGroup({
      email_id: new FormControl(null, [Validators.required, Validators.email]),

      password_group: new FormGroup({
        user_password: new FormControl(null, [Validators.required]),
        user_confirm_password: new FormControl(null)
      }, [this.passwordMatch.bind(this)]),

      user_type: new FormControl('user'),
      user_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*')]),
      address: new FormControl(null),
      mobile_no: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')]),
      dob:new FormControl(null)
    });
  }
  passwordMatch(c: AbstractControl): { [s: string]: boolean } {
    const pass = c.get('user_password').value;
    const cpass = c.get('user_confirm_password').value;
    if (pass != cpass) {

      return { 'sarkhanathi': true };
    }
    return null;
  }
  onUserAdd()
  {
    let userobj = {
      email_id: this.adduser.value.email_id,
      password: this.adduser.value.password_group.user_password,
      user_type: this.adduser.value.user_type,
      user_name: this.adduser.value.user_name,
      address: this.adduser.value.address,
      mobile_no: this.adduser.value.mobile_no,
      date_of_birth:this.adduser.value.dob,
    };
    this._data.addUser(userobj).subscribe(
      (data:any)=>{
        this._router.navigate(['nav/user/']);
      }
    );
  }
  onCancle()
  {
	this._router.navigate(['/nav/user/']);
  }
}
