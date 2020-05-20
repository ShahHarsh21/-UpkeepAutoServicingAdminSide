import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-service-redirect',
  templateUrl: './service-redirect.component.html',
  styleUrls: ['./service-redirect.component.css']
})
export class ServiceRedirectComponent implements OnInit {

  redirectForm : FormGroup;
  constructor() { }

  ngOnInit() {
    this.redirectForm = new FormGroup({
      userType : new FormControl(1)
    });
  }

  onServiceEdit()
  {
    if(this.redirectForm.value.userType == "1")
    {
      this.redirectForm.value.userType = "Registred User";
    }
    else
    {
      this.redirectForm.value.userType = "New User";
    }
  }

  onValueChange()
  {
    if(this.redirectForm.value.userType == "1")
    {
      this.redirectForm.value.userType = "Registred User";
    }
    else
    {
      this.redirectForm.value.userType = "New User";
    }
  }
}
