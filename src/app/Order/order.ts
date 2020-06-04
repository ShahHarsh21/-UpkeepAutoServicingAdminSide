export class Order {

  public constructor(
    public order_id ?: number,
    public order_amount ?: number,
    public order_date ?: string,
    public order_payment ?: string,
    public order_spec_instruction ?: string,
    public fk_user_email_id ?: string
   ) {
  }

}
