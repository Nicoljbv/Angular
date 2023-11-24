import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private urlApi = '/api/v2/pokemon/';


  constructor(private http: HttpClient) { }

  public getData (id:number): Observable<any> {
    return this.http.get<any>(`${this.urlApi}/${id}`);
  }
}
