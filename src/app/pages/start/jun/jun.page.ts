import { MethodsService } from 'src/app/methods.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController, MenuController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';


@Component({
  selector: 'app-jun',
  templateUrl: './jun.page.html',
  styleUrls: ['./jun.page.scss'],
})
export class JunPage  {

  item;
  userId: any;
  fireStoreItemList: any;
  fireStoreList: any;
  path = 'Lista Junho'

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController,
    public afAuth: AngularFireAuth,
    public firestore: AngularFirestore,
    public loading: MethodsService,
    public menuCtrl: MenuController,
    public toast: MethodsService) {

  }

  ngOnInit() {
    this.afAuth.authState.subscribe(user => {    //Inicializando os valores das coleções do Firestore
      if (user) {
        this.userId = user.uid
        this.fireStoreItemList = this.firestore.doc<any>('Usuários/' + this.userId).collection(this.path).valueChanges();
        this.fireStoreList = this.firestore.doc<any>('Usuários/' + this.userId).collection(this.path);
      }
    });
  }

  addItem() {
    if (this.item.length > 0) {
      let itemId = this.item;              // adicionando um item pelo id, se o valor dos caratceteres for maior que 0
      let id = this.firestore.createId();
      this.fireStoreList.doc(id).set({
        id: id,
        item: itemId
      });
      this.item = (null); // Limpando o input  
      this.loading.presentLoading();
      this.toast.presentToast('Item adicionado na Lista.')

    } else {
      this.loading.presentLoadingDanger();               //Se não houver valor preenchido no input, retornará toast de erro
      this.toast.presentToastDanger('Campo não preenchido.')
    }
  }

  deleteItem(index) {
    this.fireStoreList.doc(index).delete()    // deletando o item do firestore por indexação, e removendo ta tela 
    this.loading.presentLoadingDanger()
    this.toast.presentToastDanger('Item excluído da Lista.')
  }


  async updateItem(index) {
    let alert = await this.alertCtrl.create({ //Gerando uma janela de alerta com a opção de Atualizar o item ...
      header: 'Editar Item?',                 //...no firestore por indexação com condições.
      message: 'Digite sua edição do item  para atualizar.',
      inputs: [{ name: 'editItem',placeholder:'Digite aqui' }],
      buttons: [{ text: 'cancelar', role: 'cancelar' },
      {
        text: 'Editar', handler: data => {
          if (data.editItem.length > 0) {      //se Houver algum valor preenchido no input a edição será completada
            this.fireStoreList.doc(index).update({ item: data.editItem })
            this.loading.presentLoading();
            this.toast.presentToastSucces('Item editado com sucesso.');
          } else if (data.editItem.length < 1) { // senão, será enviado um toast de erro
            this.loading.presentLoadingDanger();
            this.toast.presentToastDanger('Campo não preenchido.')

          }
        }
      }]
    });
    alert.present();
  }

  toggleMenu() {      //Ativando o menu side
    this.menuCtrl.toggle();
  }

}
