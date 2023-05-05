import { ProductModel } from 'src/app/components/settings/product.module';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  dataBase = "http://localhost:3000/usuarios";

  constructor(private http: HttpClient) { }
  create(Products: ProductModel):  Observable<ProductModel> {
    return this.http.post<ProductModel>(this.dataBase,Products)
  }

  readId(id: number): Observable<ProductModel> {
    const url = `${this.dataBase}/${id}`;
    return this.http.get<ProductModel>(url);
  }
  
  update(product: ProductModel): Observable<ProductModel> {
    const url = `${this.dataBase}/${product.id}`;
    return this.http.put<ProductModel>(url, product);
  }

  delete(id: number): Observable<ProductModel> {
    const url = `${this.dataBase}/${id}`;
    return this.http.delete<ProductModel>(url);
  }
  
  read(): Observable<ProductModel[]> { 
     return this.http.get<ProductModel[]>(this.dataBase)
  }
}
