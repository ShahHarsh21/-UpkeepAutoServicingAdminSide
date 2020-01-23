export class Product {

  public constructor(
    public product_id: number,
    public product_name: string,
    public product_description: string,
    public fk_cat_id:number,
    public fk_cat_name:string,
    public product_price: string,
    public product_image: string,
    public fk_color_id:number,
    public fk_color_name:string) {
  }

}
