import { Injectable } from '@angular/core';
import { LoadingController, ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class MethodsService {
  private loading: any;
  constructor(
    private loadingCtrl: LoadingController,
    public toastController: ToastController) {

     }

     async presentLoading() {
      this.loading = await this.loadingCtrl.create({ spinner: 'circles', translucent: true, message: 'Aguarde...', duration: 1000 })
  
      return this.loading.present();
    }
    async presentLoadingDanger() {
      this.loading = await this.loadingCtrl.create({ spinner: 'circles', translucent: true, message: 'Aguarde...', duration: 2000 })
  
      return this.loading.present();
    }
    async presentLoadingRedefition() {
      this.loading = await this.loadingCtrl.create({ spinner: 'circles', translucent: true, message: 'Aguarde...', duration: 4000 })
  
      return this.loading.present();
    }
    async presentToast(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 1000,
        position:"top",
        
        color: "primary",
      });
      toast.present();
    }
    async presentToastSucces(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 1000,
        position:"top",
        color: "success",
      });
      toast.present();
    }
    async presentToastDanger(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 2000,
        position:"top",
        color: "danger",
      });
      toast.present();
    }
    async presentToastRedefition(msg:string) {
      const toast = await this.toastController.create({
        message: msg,
        duration: 4000,
        position:"top",
        
        color: "success",
      });
      toast.present();
    }
}
