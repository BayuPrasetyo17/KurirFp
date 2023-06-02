import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { ApiService } from 'src/app/api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-order',
  templateUrl: './all-order.page.html',
  styleUrls: ['./all-order.page.scss'],
})
export class AllOrderPage implements OnInit {
  token = localStorage.getItem('token') 
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });
  DataUser : any
  idpesanan : any

 constructor(private alertController: AlertController, private api : ApiService,private router:Router) {}

  async yakin() { 
    const alert = await this.alertController.create({ 
      header: 'Konfirmasi', 
      message: 'Apakah anda yakin ingin mengantar pesanan ini?', 
      buttons: [ 
        { 
          text: 'Batal', 
          role: 'cancel', 
          cssClass: 'secondary', 
          handler: () => { 
            console.log('Dibatalkan'); 
          }, 
        }, 
        { 
          text: 'Ya', 
          handler: () => { 
            console.log('Diterima');
            this.update()
            
          }, 
        }, 
      ], 
    }); 
 
    await alert.present(); 
  } 

  order(id : any){
    this.yakin()
    this.idpesanan = id
  }
  update(){
    this.api.ambil(this.idpesanan,this.headers).subscribe( (res:any) =>{ 
      console.log('Data User ===>'+JSON.stringify( res['data']) ); 
    });
  }

  detail(namaToko:any,createBy : any){
    console.log(namaToko); 
    console.log(createBy); 
    this.router.navigate(['detail', { data: namaToko, data1 : createBy }]);
  }
  ngOnInit(){
    this.api.getpesanan(this.headers).subscribe( (res:any) =>{ 
      this.DataUser = res['data']; 
      console.log('Data User ===>'+JSON.stringify( res['data']) ); 
    });
  }

}
