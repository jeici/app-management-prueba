import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL = 'https://api-management-prueba.herokuapp.com/crud/warehouse';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};
@Injectable({
  providedIn: 'root'
})
export class WarehouseService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(URL+'/all',httpOptions);
  }

}
