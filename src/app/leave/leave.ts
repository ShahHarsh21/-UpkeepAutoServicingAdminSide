export class Leave {

  public constructor(
    public leave_id: number,
    public leaveStartDate : string,
    public leaveEndDate : string,
    public Leave_type : string,
    public comment : string ,
    public status : string,
    public fk_worker_id : number
   ) {
  }

}
