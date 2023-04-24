import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }
  getData(){
    return this.http.get("http://localhost:3000/send").pipe(map((res:any)=>{
      return res;
    }))
  }
 
  SendData(data:any){
    return this.http.post<any>("http://localhost:3000/send",data).pipe(map((res:any)=>{
      return res;
    }))
  }

  url="http://localhost:3000/send/";
  EditData( id:number){
    return this.http.get<any>(`${this.url}/${id}`)
  }
  updateData(id:any,data:any){
    return this.http.put<any>(`${this.url}/${id}`,data);
  }

  
  DeleteData(id:any)
  {
    return this.http.delete(this.url+id).pipe(map((res)=>{
      return res;
    }))
  }
 
}


