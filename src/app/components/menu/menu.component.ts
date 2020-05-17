import { MethodsService } from 'src/app/methods.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  constructor(public navCtrl: NavController,
    public menuCtrl: MenuController,
    public auth: AngularFireAuth,
    public loading: MethodsService,
    public toast: MethodsService,
    public alertCtrl: AlertController

    ) { }

  ngOnInit() {}
  goHome(){
    this.navCtrl.navigateBack('start');    
    this.menuCtrl.toggle();
  }
  logout(){
   this.logoutAlert();
  }
  goJan(){
    this.navCtrl.navigateRoot('jan');

  }

  goFeb(){
    this.navCtrl.navigateRoot('feb');

  }

  goMarch(){
    this.navCtrl.navigateRoot('march');
    

  }

  goApril(){
    this.navCtrl.navigateRoot('april');
   

  }

  goMay(){
    this.navCtrl.navigateRoot('may');
   

  }

  goJun(){
    this.navCtrl.navigateRoot('jun');
   
  }

  goJul(){
    this.navCtrl.navigateRoot('jul');
    

  }

  goAug(){
    this.navCtrl.navigateRoot('aug');
    

  }

  goSep(){
    this.navCtrl.navigateRoot('sept');
   
  }

  goOct(){
    this.navCtrl.navigateRoot('oct');
    

  }

  goNov(){
    this.navCtrl.navigateRoot('nov');
    

  }

  goDec(){
    this.navCtrl.navigateRoot('dec');
    

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
