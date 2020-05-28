import { MethodsService } from 'src/app/core/methods.service';
import { Component, OnInit } from '@angular/core';
import { MenuController, NavController, AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-start',
  templateUrl: './start.page.html',
  styleUrls: ['./start.page.scss'],
})
export class StartPage implements OnInit {

  datas: any;
  dados: any
  item: any;
  userID: any;
  constructor(public menuCtrl: MenuController,
    public navCtrl: NavController,
    public auth: AngularFireAuth,
    public storage: Storage,
    public alertCtrl: AlertController,
    public toast: MethodsService,
    public loading: MethodsService,
    public db: AngularFirestore, ) {
    this.get();
  }

  ngOnInit() {
    this.auth.onAuthStateChanged(user => {   
      console.log(user.uid)
      this.userID = user
    })

  }
  getItens() {

    return new Promise((resolve, reject, ) => {

      this.db.collection("Registro").get()
        .toPromise()
        .then((r) => {
          let array = [];

          r.forEach((d) => {

            this.item = d.data()
            this.item.id = d.id
            array.push(this.item)
          });
          resolve(array)
        })
    })
  }
  get() {
    this.getItens()
      .then((r) => {
        console.log(r)
        this.datas = r
      })
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
  logout() {
    this.logoutAlert()
  }

  async logoutAlert() {    //Função de alerta com parametros e botões com escolhas 
    const Myalert = await this.alertCtrl.create({
      cssClass: 'text',
      header: "",
      subHeader: "",
      message: 'Deseja deslogar?',
      buttons: [{
        text: 'Sim',
        handler: () => {
          return this.auth.signOut().then(authData => {
            this.loading.presentLoading(2000);
            this.toast.presentToast('Usuário Deslogado.', 2000, 'danger')
            this.navCtrl.navigateBack('login')
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
