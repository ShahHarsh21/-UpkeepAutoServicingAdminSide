export class cart{

  public constructor(
    public cart_id?: number,
    public fk_user_id?: number,
    public fk_product_id?: number,
    public quantity?: number) {
  }

}
