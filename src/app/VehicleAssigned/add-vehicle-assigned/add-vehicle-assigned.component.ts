import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/VehicleModel';
import { WorkerModel } from 'src/app/WorkerModel';
import { VehicleAssignedService } from '../vehicle-assigned.service';
import { MatTableDataSource } from '@angular/material/table';
import { VehicleAssignedModel } from 'src/app/VehicleAssignedModel';

@Component({
  selector: 'app-add-vehicle-assigned',
  templateUrl: './add-vehicle-assigned.component.html',
  styleUrls: ['./add-vehicle-assigned.component.css']
})
export class AddVehicleAssignedComponent implements OnInit {

   assignedVehicleArr:number[] = [];
  // vehicleAssignedArr: VehicleAssignedModel[]=[];

  displayedColumnsVehicle:string[]=['check','vehicle_no'];
  selectedVehicleArr:number[]=[];
  dataSourceVehicle: MatTableDataSource<VehicleModel>;

  displayedColumnsWorker:string[]=['check','worker_name'];
  selectedWorkerID:number = 0;
  dataSourceWorker: MatTableDataSource<WorkerModel>;

  // arrworkers: WorkerModel[] = [];

  constructor(private _vehicleAssignedData: VehicleAssignedService) {
    this.dataSourceVehicle = new MatTableDataSource();
    this.dataSourceWorker = new MatTableDataSource();
   }

  ngOnInit(): void {
    this._vehicleAssignedData.getNotAssignedVehicles().subscribe(
      (dataVehicles: VehicleModel[]) => {
          this.dataSourceVehicle.data = dataVehicles;
    });
    this._vehicleAssignedData.getAllWorkers().subscribe(
      (dataWorkers: WorkerModel[]) => {
          // this.arrworkers = dataWorkers;
          this.dataSourceWorker.data = dataWorkers;
    });
  }

  onRadioBtnChangeWorker(item: number) {
    this.selectedWorkerID = item;

    // this.assignedVehicleArr = [];
    // this._vehicleAssignedData.getAllAssignedByWorkerID(this.selectedVehicleID).subscribe(
    //   (data: VehicleAssignedModel[]) => {
    //     this.vehicleAssignedArr = data;
    //   }, (err) =>{}, ()=> { });
  }

  onCheckboxChangeVehicle(item: VehicleModel) {
    // if(this.selectedWorkerArr.find(x => x == item.worker_id))
    // {
    //     this.selectedWorkerArr.splice(this.selectedWorkerArr.indexOf(item.worker_id), 1);
    // } else
    // {
    //     this.selectedWorkerArr.push(item.worker_id);
    // }
  }

  onSubmit() {
    // let objVehicleAssigned = {
    //   'selectedVehicleID': this.selectedVehicleID,
    //   'selectedWorkerArr' : this.selectedWorkerArr
    // };

    // this._vehicleAssignedData.addVehicleAssigned(objVehicleAssigned).subscribe(
    // (x: any) => {
    //   if (x.insertId > 0) {
    //     alert('Successfully Assgined');
    //   }
    // }
    // );
  }



}

