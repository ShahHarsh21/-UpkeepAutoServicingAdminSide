import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { category } from '../category/category';

@Injectable({
  providedIn: 'root'
})
export class ProductdataService {
  private url : string=environment.url+'product/';
  private image_url:string=environment.url+'Product_image/';
  private deleteurl: string=environment.url+'deleteAllPro/';
  constructor(private _http : HttpClient) { }

  getAllProduct()
  {
    return this._http.get(this.url);
  }
  getAllProductByCategory(category_id)
  {
    return this._http.get(environment.url+'productServices/'+category_id);
  }
  deleteProduct(product_id: number)
  {
    let x = new HttpHeaders().set(environment.header,environment.value);
    return this._http.delete(this.url + product_id ,{headers:x});
  }
  updateProduct(product_id,item)
  {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+product_id, body, { headers: head });
  }
  getProductById(product_id)
  {
    return this._http.get(this.url+product_id);
  }
  addProduct(item)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  getAllImage()
  {
    return this._http.get(this.image_url);
  }
  AddImage(item,fd)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.image_url,fd,{headers:head});
  }
  updatePhoto (product_id,fd)
  {
    console.log(product_id);
    console.log(fd);
    return this._http.put(this.image_url + product_id, fd);
  }
  deleteallPro(item:number[])
  {
    console.log(item)
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.deleteurl, body, { headers: head });
  }
}
