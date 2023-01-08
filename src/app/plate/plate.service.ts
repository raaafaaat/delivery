import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Plate } from './plate';

@Injectable({
  providedIn: 'root'
})
export class PlateService {
  [x: string]: any;

  constructor(private http: HttpClient) { }
  create(payload: Plate) {
    return this.http.post<Plate>('http://localhost:8080/Plate', payload);
  }
  get() {
    return this.http.get<Plate[]>('http://localhost:8080/Plate');
  }
  getById(id: number) {
    return this.http.get<Plate>(`http://localhost:8080/Plate/${id}`);
   }
    
   update(payload:Plate){
    return this.http.put(`http://localhost:8080/Plate`,payload);
   }

   delete(id:number){
    return this.http.delete<Plate>(`http://localhost:8080/Plate/${id}`);
 }   



}
