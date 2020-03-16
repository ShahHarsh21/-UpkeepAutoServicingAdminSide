import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceDataService } from '../../service-data.service';
import { Service_class } from '../../service_class';

@Component({
  selector: 'app-service-edit',
  templateUrl: './service-edit.component.html',
  styleUrls: ['./service-edit.component.css']
})
export class ServiceEditComponent implements OnInit {
  editService :  FormGroup;
  service_routs_id:number;
  serviceArr:any[]=[
    { 'Name': 'Air-Condtioning', 'isChecked': false },
    { 'Name': 'Break Repairs', 'isChecked': false },
    { 'Name': 'Heating & Cooling', 'isChecked': false },
    { 'Name': 'Oil & Lube', 'isChecked': false },
    { 'Name': 'Steering & Suspension', 'isChecked': false },
    { 'Name': 'Transmission Repair', 'isChecked': false },
    { 'Name': 'Battery Service', 'isChecked': false },
    { 'Name': 'Exhaust System', 'isChecked': false },
    { 'Name': 'Emissions', 'isChecked': false },
    { 'Name': 'Pvt Maintenance', 'isChecked': false },
    { 'Name': 'Tire Pressure', 'isChecked': false },
    { 'Name': 'Other', 'isChecked': false }
  ];
  checkServiceArr : string[]=[];

  constructor(public _route:Router,public _Act_routs:ActivatedRoute,public _Data:ServiceDataService) { }
  ngOnInit() {
    this.service_routs_id=this._Act_routs.snapshot.params['service_id'];
    console.log(this.service_routs_id);
    this.editService=new FormGroup({
      service_id :new FormControl(null),
      fk_user_id:new FormControl(null),
      vehicle_no: new FormControl(null,Validators.required,Validators.pattern[('(([A-Za-z]){2,3}(|-)(?:[0-9]){1,2}(|-)(?:[A-Za-z]){2}(|-)([0-9]){1,4})|(([A-Za-z]){2,3}(|-)([0-9]){1,4})')]),
      meter_reading :new FormControl(null,Validators.required),
      fuel_tank:new FormControl(null,Validators.required),
      remark :new FormControl(null),
      complaints:new FormControl(null,Validators.required)
    });
    this._Data.getServiceById(this.service_routs_id).subscribe(
      (service_Data:any)=>{
        console.log(service_Data);
        this.formDataBind(service_Data[0]);
      }
    );
  }
  formDataBind(item:Service_class)
    {
      console.log(item);
      this.editService.patchValue({
        serice_id : item.service_id,
        fk_user_id : item.fk_user_id,
        vehicle_no:item.vehicle_no,
        meter_reading : item.meter_reading,
        fuel_tank:item.fuel_tank,
        remark : item.remark,
        });

        /* to select the checkbox */
        let arr:string [] = [];
        arr =  item.complaints.split(',');

          for(let i=0; i<arr.length; i++) {
            if(this.serviceArr.find(x => x.Name == arr[i]))
            {
              let currentItem = this.serviceArr.find(x => x.Name == arr[i]);
              let index = this.serviceArr.indexOf(currentItem);
              this.serviceArr[index].isChecked = true;
              this.checkServiceArr.push(currentItem.Name); //also add this name to checked Arr
            }
          }

    }
  onCancle()
  {
  }

  onServiceCheck(item)
  {
    if(this.checkServiceArr.find(x => x == item))
    {
        this.checkServiceArr.splice(this.checkServiceArr.indexOf(item),1);
    }
    else
    {
      this.checkServiceArr.push(item);
    }
    console.log(this.checkServiceArr);
  }

  onServiceEdit()
  {
    console.log(this.editService.value);
    this.editService.value.complaints = this.checkServiceArr.toString();
    this._Data.updateService(this.service_routs_id,this.editService.value).subscribe(
      (data:any)=>{
        console.log(data);
        this._route.navigate(['/nav/service']);
      }
    );
  }
}
