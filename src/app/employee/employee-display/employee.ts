export class employee {

  public constructor(public employee_id: number,
    public employee_img: string,
    public employee_designation: string,
    public salary:string,
    public employee_type: string,
    public fk_user_id:number) {
  }

}
