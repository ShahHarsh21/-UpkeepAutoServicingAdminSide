export class supplier {

  public constructor(
    public supplier_id:number,
    public supplier_name : string,
    public firm_name : string,
    public contact_no :string,
    public firm_address :string,
    public fk_product_id : number,
    public fk_stock_id :number
  ) {
  }

}
