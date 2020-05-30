export class Product_stock{

  public constructor(
    public stock_id?:number,
    public product_id? : number,
    public fk_supplier_id?:number,
    public fk_color_id?:number,
    public fk_product_id?:number,
    public quantity?:number,
    public product_name? :string,
    public product_img? :string,
    public product_price? :string,
    public supplier_name? : string,
    public category_name? : string)
     {}

}
