import { Component, OnInit, ViewChild } from '@angular/core';
import { DashboardService } from '../dashboard.service';
import { map, throttleTime } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { LegendLabelsContentArgs } from '@progress/kendo-angular-charts';
import { IntlService } from '@progress/kendo-angular-intl';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Order } from '../Order/order';
import { dashboard } from '../class/dashboard';



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
  dataSource: MatTableDataSource<Order>;
  displayedColumns: string[] = ['fk_pro_id', 'pro_name', 'total'];

  public monthOrderCount: any[] = [];
  public orderData: any[] = [];
  public months: any[] = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
  startyr: number = 2020;
  public DonutData: any[] = [];
  currentYear = now.getFullYear();
  selectedYear: number = this.currentYear;
  yearArray : any[] = [
    {'year' : '2017'},
    {'year' : '2018'},
    {'year' : '2019'},
    {'year' : '2020'},
  ];
  customerCount: number;
  TodaysCOH: number;
  feedbackCount: number;
  TodaysOrder: number;
  public data: model[] = [];
  public pieData: any[] = [];
  public labelContent(e: any): string {
    return e.category;
  }
  public DataArr : dashboard[];
  public countArr : number[]=[];
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(public serobj: DashboardService, private intl: IntlService) {
    this.labelContent = this.labelContent.bind(this);
    this.dataSource = new MatTableDataSource();
  }
  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  ngOnInit(): void {

    this.serobj.orderCust('2020-08-02').subscribe(
      (data:dashboard[])=>{
        console.log(data)
        this.DataArr = data;
        // for(let i=0 ; i < data.length ; i++)
        // {
        //   this.countArr = data[i].count;
        // }
        console.log(this.DataArr)
      }
    );
    this.serobj.getOrder().subscribe(
      (dataTodaysOrderCount: any) => {
        // console.log(dataCustomerCount);
        this.TodaysOrder = dataTodaysOrderCount[0].Today_Orders;
      }
    );

    this.onYearChange()
    {
      console.log(this.startyr, this.currentYear);
      for (let y = this.startyr; y <= this.currentYear; y++)
      {
        this.yearArray.push(y);
        this.serobj.orderCust(y).subscribe(
          (data:any)=>{
            this.yearArray = data;
          }
        )
      }

      console.log(this.selectedYear);
    }
    console.log(this.yearArray);

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
  public onYearChange(): void
  {
    console.log(this.selectedYear);
    this.serobj.getAllorder(this.selectedYear).subscribe((data2: any[]) => {
      this.monthOrderCount = data2;
      console.log(this.monthOrderCount);
      for (let j = 0; j < data2.length; j++)
      {
        this.orderData.push(this.monthOrderCount[j].COUNT);
      }
    });
    console.log(this.orderData, this.months);
  }

}
