import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-history',
  templateUrl: './history.page.html',
  styleUrls: ['./history.page.scss'],
})
export class HistoryPage implements OnInit {

   
  token = localStorage.getItem('token') 
  email = localStorage.getItem('email') 
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });
  DataUser : any

  constructor(
    private api : ApiService,
    private router:Router
  ) { }

  detail(id:any){
    console.log(id); 
    this.router.navigate(['detail-history', { data: id }]);
  }

  ngOnInit() {
    this.api.history(this.email,this.headers).subscribe( (res:any) =>{ 
      this.DataUser = res['data']; 
      console.log('Data User ===>'+JSON.stringify( res['data']) ); 
    });
  }

}
