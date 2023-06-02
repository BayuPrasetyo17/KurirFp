import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { ApiService } from 'src/app/api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-detail-history',
  templateUrl: './detail-history.page.html',
  styleUrls: ['./detail-history.page.scss'],
})
export class DetailHistoryPage implements OnInit {

  token = localStorage.getItem('token') 
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });
  DataUser : any
  idpesanan : any

 constructor(private alertController: AlertController, private api : ApiService,private route: ActivatedRoute) {}

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
  ngOnInit(){
    this.route.params.subscribe(params => { 
      const data = params['data']; 
      console.log(data) 
 
      this.api.getdetailhistory(data,this.headers).subscribe( (res:any) =>{ 
        this.DataUser = res['data']; 
        console.log('Data User ===>'+JSON.stringify( res['data']) ); 
      });
    });
  }

}

