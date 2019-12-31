import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorydataService {
  private url:string=environment.url+'category/';
  constructor(private _http : HttpClient) { }
  getAllCategory()
  {
    return this._http.get(environment.url+'category');
  }
  deleteCategory(category_id)
  {
    return this._http.delete(environment.url+'category'+category_id);
  }
  getCategoryById(category_id)
  {
    return this._http.get(environment.url+'category'+category_id);
  }
  updateCategory(category_id,item)
  {
      const body = JSON.stringify(item);
      const head = new HttpHeaders().set(environment.header, environment.value);
      return this._http.put(this.url+'category'+category_id, body, { headers: head });
  }
}
