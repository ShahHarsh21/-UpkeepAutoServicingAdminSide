export class userSerivce_class {

  public constructor(
    public user_id : number,
    public email_id : string,
    public password : string,
    public user_name : string,
    public mobile_no : number,
    public address : string,
    public date_of_birth : Date,
    public user_type : string,
    public service_id  : number,
    public fk_user_id  : number,
    public meter_reading : string,
    public fuel_tank  : string,
    public remark : string,
    public complaints : string,
    public vehicle_assigned_id: number,
    public status: string,
    public vehicle_no : string,
    public worker_id: number,
    public fk_worker_id:  number,
    public worker_name: string,
    public remark_vehicle : string,
    public Arrival_date : Date,
    public Estimated_date :Date,
    public worker_image? : string,) {
  }

}
