import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api/api.service';
import { AlertController } from '@ionic/angular'; 
import { Router } from '@angular/router';
@Component({
  selector: 'app-pilih-register',
  templateUrl: './pilih-register.page.html',
  styleUrls: ['./pilih-register.page.scss'],
})
export class PilihRegisterPage implements OnInit {

  form : any = { 
    username : '', 
    email : '', 
    password : '', 
    phoneKurir : '' 
  }; 
 
  constructor( 
    private api :ApiService, 
    private router : Router, 
    private alert : AlertController 
 
  ) { } 
 
  private async presentAlert(message : any) { 
    const alert = await this.alert.create({ 
      header: 'Notifikasi', 
      message: message, 
      buttons: ['OK'] 
    }); 
 
    await alert.present(); 
  } 
  validForm(){ 
    var doSubmitForm = true; 
 
    if(this.form.username == null || this.form.username == ''){ 
      this.presentAlert('Anda Belum Input Username Lengkap'); 
      doSubmitForm = false; 
    } 
 
    if(this.form.email == null || this.form.email == ''){ 
      this.presentAlert('Anda Belum Input Email Lengkap'); 
      doSubmitForm = false; 
    } 
 
    if(this.form.password == null || this.form.password == ''){ 
      this.presentAlert('Anda Belum Input Password'); 
      doSubmitForm = false; 
    } 
    if(this.form.phoneKurir == null || this.form.phoneKurir == ''){ 
      this.presentAlert('Anda Belum Input PhoneKurir'); 
      doSubmitForm = false; 
    } 
 
    if(this.form.password.length < 8){ 
      this.presentAlert('Input Password Minimum 8 Angka dan Huruf'); 
      doSubmitForm = false; 
    } 
    if(this.form.phoneKurir.length < 11){ 
      this.presentAlert('Input PhoneKurir Minimum 11'); 
      doSubmitForm = false; 
    } 
 
    if(doSubmitForm){ 
      this.regiter(); 
    } 
  } 
  regiter(){ 
    this.api.rKurir(this.form).subscribe((res:any)=>{ 
      console.log('res',res) 
      localStorage.setItem('email',this.form.email); 
      this.presentAlert('Berhasil');  
      this.router.navigateByUrl("login"); 
    }, 
    err => { 
      this.presentAlert('Silahkan coba lagi'); 
    }); 
  }

  ngOnInit() {
  }

}
