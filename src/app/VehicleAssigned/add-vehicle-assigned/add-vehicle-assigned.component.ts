import { Component, OnInit } from '@angular/core';
import { VehicleModel } from 'src/app/VehicleModel';
import { WorkerModel } from 'src/app/WorkerModel';
import { VehicleAssignedService } from '../vehicle-assigned.service';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-add-vehicle-assigned',
  templateUrl: './add-vehicle-assigned.component.html',
  styleUrls: ['./add-vehicle-assigned.component.css']
})
export class AddVehicleAssignedComponent implements OnInit {

  displayedColumnsVehicle:string[]=['check','vehicle_no'];
  selectedVehiclesArr: number[] = [];
  dataSourceVehicle: MatTableDataSource<VehicleModel>;

  displayedColumnsWorker: string[] = ['check','worker_name'];
  selectedWorkerID: number = 0;
  dataSourceWorker: MatTableDataSource<WorkerModel>;

  constructor(private _vehicleAssignedData: VehicleAssignedService) {
    this.dataSourceVehicle = new MatTableDataSource();
    this.dataSourceWorker = new MatTableDataSource();
   }

  ngOnInit(): void {
    this._vehicleAssignedData.getNotAssignedVehicles().subscribe(
      (dataVehicles: VehicleModel[]) => {
        this.dataSourceVehicle.data = dataVehicles;
      }
    );

    this._vehicleAssignedData.getAllWorkers().subscribe(
      (dataWorkers: WorkerModel[]) => {
          this.dataSourceWorker.data = dataWorkers;
      }
    );
  }

  onRadioBtnChangeWorker(item: number) {
    this.selectedWorkerID = item;
  }

  onCheckboxChangeVehicle(item: VehicleModel) {
    if(this.selectedVehiclesArr.find(x => x == item.service_id))
    {
        this.selectedVehiclesArr.splice(this.selectedVehiclesArr.indexOf(item.service_id), 1);
    } else
    {
        this.selectedVehiclesArr.push(item.service_id);
    }
  }

  onSubmit() {
    if (this.dataSourceVehicle.data.length > 0) {
      let objVehicleAssigned = {
        'selectedWorkerID': this.selectedWorkerID,
        'selectedVehicleArr' : this.selectedVehiclesArr
      };

      this._vehicleAssignedData.addVehicleAssigned(objVehicleAssigned).subscribe(
      (x: any) => {
        // console.log(x);
        if (x.insertId > 0) {
          alert('Successfully Assgined');
        }
      });
    }
  }
}
