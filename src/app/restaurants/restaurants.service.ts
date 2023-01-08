import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Restaurant } from './restaurant';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get<Restaurant[]>('http://localhost:8080/Restaurant');
  }

  create(payload: Restaurant) {
    return this.http.post<Restaurant>('http://localhost:8080/Restaurant', payload);
  }

  getById(id: number) {
    return this.http.get<Restaurant>(`http://localhost:8080/Restaurant/${id}`);
   }
    
   update(payload:Restaurant){
    return this.http.put(`http://localhost/:8080/Restaurant`,payload);
   }

   delete(id:number){
    return this.http.delete<Restaurant>(`http://localhost:8080/Restaurant/${id}`);
 }   
}
