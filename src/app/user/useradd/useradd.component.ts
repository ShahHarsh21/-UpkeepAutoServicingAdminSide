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
  this.adduser = new FormGroup({

    email_id:new FormControl(),
    user_name:new FormControl(),
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
