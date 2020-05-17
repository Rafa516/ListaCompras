import { MethodsService } from './../../methods.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  nome:string
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController,
    public auth: AngularFireAuth,
    public storage:Storage,
    public alertCtrl: AlertController,
    public toast: MethodsService,
    public loading :MethodsService) { }

  ngOnInit() {
   
  }
  goJan() {
    this.navCtrl.navigateForward('jan');
  }
  goFeb() {
    this.navCtrl.navigateForward('feb');
  }
  goMarch() {
    this.navCtrl.navigateForward('march');
  }
  goApril() {
    this.navCtrl.navigateForward('april');
  }
  goMay() {
    this.navCtrl.navigateForward('may');
  }
  goJun() {
    this.navCtrl.navigateForward('jun');
  }
  goJul() {
    this.navCtrl.navigateForward('jul');
  }

  goAug() {
    this.navCtrl.navigateForward('aug');
  }
  goSep() {
    this.navCtrl.navigateForward('sept');
  }
  goOct() {
    this.navCtrl.navigateForward('oct');
  }
  goNov() {
    this.navCtrl.navigateForward('nov');
  }
  goDec() {
    this.navCtrl.navigateForward('dec');
  }
  logout(){
this.logoutAlert()
  }

  async logoutAlert() {    //Função de alerta com parametros e botões com escolhas 
    const Myalert = await this.alertCtrl.create({
      header: "",
      subHeader: "",
      message: 'Deseja deslogar?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          return this.auth.signOut().then(authData => {
            this.loading.presentLoadingDanger();
            this.toast.presentToastDanger('Usuário Deslogado.')
            this.navCtrl.navigateBack('login')
            this.menuCtrl.toggle();
          });
          ;
        }
      },
      {
        text: 'Não',
        handler: () => {

          ;
        }
      }]
    });
    Myalert.present()
  }


}
