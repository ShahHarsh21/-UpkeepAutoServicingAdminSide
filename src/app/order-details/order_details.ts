export class order_details{

  public constructor(
    public order_details_id?: number,
    public fk_order_id?: number,
    public fk_product_id?: number,
    public quantity?: number) {
  }

}
