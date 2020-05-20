import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  private loading: any;
  constructor(
    public  loadingCtrl: LoadingController,
    public toastController: ToastController) {

     }
     //Método do loading, passando por parêmetro o tempo de duração
     async presentLoading(time:number) {
      this.loading = await this.loadingCtrl.create({ spinner: 'circles', translucent: true, message: 'Aguarde...', duration: time })
  
      return this.loading.present();
    }
    // Método do toast, passando por parâmetro a mensagem , a duração e a cor.
    async presentToast(msg:string, time:number, cor:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: time,
        position:"bottom",
        color:cor,
      });
      toast.present();
    }
   
}
