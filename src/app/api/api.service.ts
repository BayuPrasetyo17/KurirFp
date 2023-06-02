import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(  private http : HttpClient) { }
  login(form : any) : Observable<any>{ 
    return this.http.post('http://127.0.0.1:8000/api/login',form,); 
  }

  rKurir(form : any) : Observable<any>{ 
    return this.http.post('http://127.0.0.1:8000/api/kurir',form); 
  }
  ambil(id : any ,headers:any) : Observable<any>{ 
    return this.http.put('http://127.0.0.1:8000/api/kurir/ambil/'+ id,{},{headers : headers}); 
  }

  getpesanan(headers : any){
    return this.http.get('http://127.0.0.1:8000/api/kurir/pesanan',{headers : headers})
  }
  history(email : any,headers : any){
    return this.http.get('http://127.0.0.1:8000/api/kurir/pesanan/'+ email,{headers : headers})
  }
  
  getakunkurir(email:any,headers:any){
    return this.http.get('http://127.0.0.1:8000/api/kurir/kurir/'+email,{headers:headers})
  }
  getdetailpesanan(data:any, data1 : any, headers:any){
    return this.http.get('http://127.0.0.1:8000/api/kurir/detailPesanan/'+data1+'/'+data,{headers:headers})
  }
  getdetailhistory(data:any, headers:any){
    return this.http.get('http://127.0.0.1:8000/api/kurir/detailhostory/'+data,{headers:headers})
  }
}
