
import { Component, OnInit, ViewChild } from '@angular/core';
import { user } from '../user';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { UserdataService } from '../userdata.service';
import { Router } from '@angular/router';
import { UserViewMoreComponent } from '../user-view-more/user-view-more.component';

@Component({
  selector: 'app-user-display',
  templateUrl: './user-display.component.html',
  styleUrls: ['./user-display.component.css']
})
export class UserDisplayComponent implements OnInit {
  displayedColumns:string[]=['check','email_id','password','user_name','Action'];
  userarr:user[]=[];
  deleteuserarr:number[]=[];
  dataSource: MatTableDataSource<user>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;


  constructor(private _data:UserdataService, private _dialog:MatDialog, private _router:Router) {
    this.dataSource = new MatTableDataSource();
   }


  ngOnInit() {
    this.dataSource.paginator=this.paginator;
    this._data.getAllUser().subscribe(
      (data:any)=>{
            this.userarr=data;
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
          this.userarr.splice(this.userarr.indexOf(row),1);
          this.dataSource.data=this.userarr;
          this._router.navigate(['nav/user/']);
        }
      );
    }
  }
  onchecheckboxchange(row:user)
  {
    if(this,this.userarr.find(x => x == row.user_id))
    {
        this.deleteuserarr.splice(this.deleteuserarr.indexOf(row.user_id),1);
    }
    else{
      this.deleteuserarr.push(row.user_id);
    }
  }
  onDeleteAll()
  {
    if(confirm('Are You Sure To Delete Multiple User?')){
      this._data.DeleteAllUser(this.deleteuserarr).subscribe(
        (data:user)=>{
          for(let i=0;i<this.deleteuserarr.length;i++)
          {
                let x=this.userarr.find(x => x.user_id == this.deleteuserarr[i]);
                this.userarr.splice(this.userarr.indexOf(x),1);
          }
          this.dataSource.data=this.userarr;
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
     });
  }
}
  onAddClick()
  {
    this._router.navigate(['/nav/userAdd']);
  }
  onEdit(row)
  {
    this._router.navigate(['/nav/userEdit/'+row.user_id]);
  }
  onViewMore(row)
  {
    this._dialog.open(UserViewMoreComponent,{data:row});
  }
}
