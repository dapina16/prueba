import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment as ENV } from 'src/environments/environment.prod'

@Injectable({
  providedIn:'root'
})
export class ResultService {
  listaResult : Array<any> = [];

  constructor(private http: HttpClient) {}

  searchResult(query:string){
    return this.http.get(ENV.endpoints.search + query);
  }

  detailResult(id:string){
    return this.http.get(ENV.endpoints.detail + id);
  }

  descriptionResult(id:string){
    return this.http.get(ENV.endpoints.descripcion +id+'/description');
  }
}
