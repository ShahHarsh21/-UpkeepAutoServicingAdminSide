export  class VehicleModel {
public constructor(
  public service_id: number,
  public fk_user_id: number,
  public vehicle_no: string,
  public meter_reading: string,
  public fuel_tank: string,
  public remark: string,
  public complaints: string
) {}
}
