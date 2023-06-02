import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { HttpHeaders } from '@angular/common/http';
@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  token = localStorage.getItem('token') 
  email = localStorage.getItem('email')
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });
  DataUser : any

  constructor(
    private api : ApiService
  ) { }

  ngOnInit() {
    this.api.getakunkurir(this.email,this.headers).subscribe((res:any)=>{
      this.DataUser=res['data'];
      console.log('Data User ===>'+JSON.stringify(res['data']) );
    });
  }

}
