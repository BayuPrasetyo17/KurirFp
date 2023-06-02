import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular'; 
import { ApiService } from 'src/app/api/api.service';
import { HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {

  token = localStorage.getItem('token') 
  headers  = new HttpHeaders({ 
    'Authorization': `${this.token}`
  });
  DataProduk : any
  DataToko : any
  DataUSer : any
  DataTambahan:any
  idpesanan : any

 constructor(private alertController: AlertController, private api : ApiService,private route: ActivatedRoute,private http : HttpClient) {}

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
      const data1 = params['data1']; 
      console.log(data) 
 
      this.api.getdetailpesanan(data, data1, this.headers).subscribe( (res:any) =>{ 
        this.DataProduk = res['pesanan']; 
        this.DataToko = res['toko']; 
        this.DataUSer = res['user']; 
        this.DataTambahan = res['tambahan']; 
        console.log('DataProduk'+JSON.stringify( res['pesanan']) ); 
        console.log('DataToko'+JSON.stringify( res['toko']) ); 
        console.log('DataUser'+JSON.stringify( res['user']) ); 
        console.log('tambahan'+JSON.stringify( res['tambahan']) ); 
      });

    });
  }

}
