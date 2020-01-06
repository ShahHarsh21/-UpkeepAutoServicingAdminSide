export class stock{

  public constructor(
    public stock_id:number,
    public fk_supplier_id:number,
    public fk_color_id:number,
    public fk_product_id:number,
    public quantity:number) {
  }

}
