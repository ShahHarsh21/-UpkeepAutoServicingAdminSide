export  class WorkerModel {
  public constructor(
    public worker_id: number,
    public worker_name: string,
    public vehiclecount : number,
    public email_id: string,
    public password: string,
    public mobile_no: string,
    public address: string,
    public worker_image: string,
    public joining_date: string,
    public isAssigned: boolean
  ) {}
  }
