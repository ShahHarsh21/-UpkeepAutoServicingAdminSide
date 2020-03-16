export  class VehicleAssignedModel {
  public constructor(
    public vehicle_assigned_id?: number,
    public status?: string,
    public service_id?: number,
    public vehicle_no?: string,
    public worker_id?: number,
    public fk_worker_id?:  number,
    public worker_name?: string,
    public remark?: string,
    public worker_image? : string) {

    }
  }
