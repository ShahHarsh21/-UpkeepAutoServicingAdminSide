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
  //   this.adduser = new FormGroup({
  //     email_id: new FormControl(null, [Validators.required, Validators.email]),
  //     user_type: new FormControl('user'),
  //     user_name: new FormControl(null, [Validators.required, Validators.minLength(5), Validators.pattern('[a-zA-Z]*'), this.checkUname.bind(this)]),
  //     address: new FormControl(null),
  //     mobile_no: new FormControl(null, [Validators.required, Validators.maxLength(10), Validators.pattern('[0-9]*')])
  //   });
  this.adduser = new FormGroup({
    email_id:new FormControl(),
    user_name:new FormControl(),
    // password: new FormGroup({
    //   user_password: new FormControl(null, [Validators.required]),
    //   user_confirm_password: new FormControl(null)
    // }),
    user_type:new FormControl(),
    address:new FormControl(),
    mobile_no:new FormControl()
  });
  // }
  // passwordMatch(c: AbstractControl): { [s: string]: boolean } {
  //   const pass = c.get('user_password').value;
  //   const cpass = c.get('user_confirm_password').value;
  //   if (pass != cpass) {

  //     return { 'sarkhanathi': true };
  //   }
  //   return null;
  }
  onUserAdd()
  {
    this._router.navigate[('')];
  }
}
