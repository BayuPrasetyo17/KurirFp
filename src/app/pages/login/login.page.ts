import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { Router } from '@angular/router';
import jwt_decode from 'jwt-decode';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form : any = { 
    email : '', 
    password : '' 
  };
  constructor(
    private api: ApiService,
    private router:Router,

  ) { }
  login() { 
    this.api.login(this.form).subscribe((res:any)=>{ 
      if (res.token) { 
        const decodedToken : any = jwt_decode(res.token); 
    
        if (decodedToken.role === 'kurir') { 
          this.router.navigateByUrl("tabs/all-order"); 
        } 
      } 

      localStorage.setItem('email',this.form.email) 
      localStorage.setItem('token',res.token); 
    }); 
  }
  ngOnInit() {
   
  }

}
