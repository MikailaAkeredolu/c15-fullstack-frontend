import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Home } from './home';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseEndpoint = "http://localhost:8080/homes";


  constructor(private httpClient:HttpClient) { }

  getAllHomes():Observable<Home[]>{
    return this.httpClient.get<Home[]>(`${this.baseEndpoint}`);
  }

  addHome(home:Home){
    return this.httpClient.post<Home>(`${this.baseEndpoint}`, home);
  }

  getHomeById(id: number): Observable<Home>{
    return this.httpClient.get<Home>(`${this.baseEndpoint}/${id}`)
  }

  deleteHomeById(id: any){
    return this.httpClient.delete<Home>(`${this.baseEndpoint}/${id}`)
  }

  
}
