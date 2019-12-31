export class slot{

  public constructor(public slot_register_id: number,
    public vehicle_type: string,
    public vehicle_model: string,
    public service_type:number,
    public time_period: string,
    public pickup_time: string,
    public pickup_address: string,
    public requirment:number,
    public drop_address:string,
    public allotment_emp_id:number) {
  }

}
