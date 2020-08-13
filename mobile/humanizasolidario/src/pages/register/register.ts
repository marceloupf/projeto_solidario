import {Component} from "@angular/core";
import {NavController} from "ionic-angular";
import {LoginPage} from "../login/login";
import {InstituicaoService} from "../../services/instituicao-service";
import {HomePage} from "../home/home";
import {TpusuarioPage} from "../tpusuario/tpusuario";
import {InstituicaoPage} from "../instituicao/instituicao";
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  instituicao = {
    dscep: "",
    dsdescricao: "",
    dsemail: "",
    dsendereco: "",
    dsfone1: "",
    dsfone2: "",
    dssenha: "",
    dsstatus: "",
    logo: "",
    nminstituicao: ""
  }

  constructor(public nav: NavController, public instituicaoService: InstituicaoService, private alertCtrl: AlertController) {
  }

  // register and go to home page
  register() {
    if (this.instituicao.nminstituicao == "" || this.instituicao.dsemail == "" || this.instituicao.dssenha == "" ||this.instituicao.dsendereco == "") {
      const alert = this.alertCtrl.create({
        title: "Atenção",
        subTitle: "Informe os campos obrigatórios",
        buttons: ["OK"]
      });
      alert.present();
    } else {
      this.instituicaoService.save(this);
    }
    // console.log(this.instituicao)
    // this.nav.setRoot(HomePage);
  }

  // go to login page
  login() {
    this.nav.setRoot(LoginPage);
  }

 
}
