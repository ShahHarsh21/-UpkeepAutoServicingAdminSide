import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../user';
import { MatTableDataSource, MatPaginator, MatSort, MatDialog } from '@angular/material';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { UserViewMoreComponent } from '../user-view-more/user-view-more.component';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  displayedColumns:string[]=['email_id','password','user_name','mobile_no','address','date_of_birth','user_type','Action'];
  userarr:user[]=[];
  dataSource: MatTableDataSource<user>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _data:UserdataService, private _dialog:MatDialog, private _router:Router) {
    this.dataSource = new MatTableDataSource();
   }


  ngOnInit() {
    this  ._data.getAllUser().subscribe(
      (data:any)=>{
            this.dataSource.data=data;
      }
    );
  }

applyFilter(filtervalue:string)
  {
    this.dataSource.filter = filtervalue.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  onDelete(row)
  {
    let x:number = this.userarr.indexOf(row);
    if(confirm("ARE YOU SURE YOU WANT TO DELETE ?"))
    {
      this._data.deleteUser(row.user_id).subscribe(
        (data:any)=>{
          this.userarr.splice(x,1);
          this.dataSource.data=this.userarr;
          this._router.navigate(['user']);
        }
      );
    }
    // this._data.deleteProduct
  }
  onAddClick()
  {
    this._router.navigate(['/nav/userAdd']);
  }
  onEdit(row)
  {
    // let user_id=row.user_id;
    this._router.navigate(['/nav/userEdit/'+row.user_id]);
  }
  onViewMore(row)
  {
      this._dialog.open(UserViewMoreComponent,{data:row});
  }
}
