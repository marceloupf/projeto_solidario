import {Component} from "@angular/core";
import {NavController, AlertController, ToastController, MenuController} from "ionic-angular";
import {HomePage} from "../home/home";
//import {RegisterPage} from "../register/register";
//import {TripsPage} from "../trips/trips";
import { InstituicaoPage } from "../instituicao/instituicao";

@Component({
  selector: 'page-tpusuario',
  templateUrl: 'tpusuario.html'
})
export class TpusuarioPage {

  constructor(public nav: NavController, public forgotCtrl: AlertController, public menu: MenuController, public toastCtrl: ToastController) {
    this.menu.swipeEnable(false);
  }

  // go to register page
  register() {
  //  this.nav.setRoot(RegisterPage);
  }

  // login and go to home page
  querodoar() {
    //this.nav.setRoot(HomePage);
    this.nav.setRoot(InstituicaoPage);
    //this.nav.setRoot(TripsPage);
  }

  forgotPass() {
    let forgot = this.forgotCtrl.create({
      title: 'Forgot Password?',
      message: "Enter you email address to send a reset link password.",
      inputs: [
        {
          name: 'email',
          placeholder: 'Email',
          type: 'email'
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          handler: data => {
            console.log('Cancel clicked');
          }
        },
        {
          text: 'Send',
          handler: data => {
            console.log('Send clicked');
            let toast = this.toastCtrl.create({
              message: 'Email was sended successfully',
              duration: 3000,
              position: 'top',
              cssClass: 'dark-trans',
              closeButtonText: 'OK',
              showCloseButton: true
            });
            toast.present();
          }
        }
      ]
    });
    forgot.present();
  }

}