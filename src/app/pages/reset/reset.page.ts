import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { NavController, AlertController, ToastController } from '@ionic/angular';
import { FormBuilder, Validators, FormGroup, } from '@angular/forms';
import { MethodsService } from 'src/app/methods.service';
import { EmailValidator } from 'src/validators/email';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.page.html',
  styleUrls: ['./reset.page.scss'],
})
export class ResetPage implements OnInit {
  resetPwdForm: FormGroup;
  constructor(
    public auth: AngularFireAuth,
    public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public load: MethodsService,
    public alertCtrl: AlertController,
    public toast: MethodsService) {
    this.resetPwdForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])]
    });
  }

  ngOnInit() {
  }

  resetUserPwd() {
    this.auth.sendPasswordResetEmail(this.resetPwdForm.value.email).then(async (user) => {
      this.toast.presentToast('Foi enviado  um link no seu email para redefinição da sua senha.',5000,'success')
      this.load.presentLoading(5000);
      this.navCtrl.navigateBack('login')

    }, async (error) => {
      this.load.presentLoading(1000);
      this.toast.presentToast('Email inválido ou não cadastrado.',1000,'danger');
      this.resetPwdForm.controls['email'].setValue(null); //limpa o input do email

    });
  }

}
