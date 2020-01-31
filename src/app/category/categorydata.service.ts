import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { category } from './category';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {
  private url:string=environment.url+'nav/category/';
  constructor(private _http : HttpClient) { }
  getAllCategory()
  {
    console.log(this._http.get(this.url));
    return this._http.get(this.url)
  }
  deleteCategory(category_id)
  {
    console.log(category_id);
    let x = new HttpHeaders().set(environment.header,environment.value);
    console.log(x);
    return this._http.delete(this.url+category_id,{headers:x});
  }
  getCategoryById(category_id)
  {
    return this._http.get(this.url+category_id);
  }
  addCategory(item:category)
  {
    const body = JSON.stringify(item);
    const head = new HttpHeaders().set(environment.header, environment.value);
    return this._http.post(this.url, body, { headers: head });
  }
  updateCategory(category_id,item)
  {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+category_id, body, { headers: head });
  }
}
