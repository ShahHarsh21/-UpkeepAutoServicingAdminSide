import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { IntlService } from '@progress/kendo-angular-intl';

declare var require: any;

var dateFormat = require('dateformat');
var now = new Date();
class model {
  constructor(public kind: string, public share: number) { }
}
@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {
     public DonutData: any[] = [];
   public pieData: any[] = [];
   public labelContent(e: any): string {
   return e.category;
   console.log(this.pieData);

}
 // public labelContent1(e: any): string {
   // return e.category;
  //}
  constructor(public serobj: DashboardService, private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
  }

  ngOnInit() {
    this.serobj.getOrder().subscribe((data3: any[]) => {
      this.DonutData = data3;
      console.log(this.DonutData);
      for (let i = 0; i < data3.length; i++) {
        this.pieData = [
          { category: 'Done', value: this.DonutData[i].Done },
          { category: 'Assigned', value: this.DonutData[i].Assigned },
          { category: 'In_process', value: this.DonutData[i].In_process },

        ];
      }
    });
  }
 }


