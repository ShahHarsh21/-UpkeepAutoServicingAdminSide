export class employee {

  public constructor(
    public employee_id: number,
    public employee_img: string,
    public employee_designation: string,
    public salary:string,
    public employee_type: string,
    public fk_user_id:number,
    public user_id: number,
      public email_id: string,
      public user_name:string,
      public mobile_no: number,
      public address: string,
      public date_of_birth: Date,
      public user_type:string) {
  }

}
