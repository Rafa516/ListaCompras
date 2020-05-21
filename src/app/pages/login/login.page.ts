import { Component, OnInit } from '@angular/core';
import { MethodsService } from 'src/app/methods.service';
import { LoadingController, AlertController, NavParams, NavController } from '@ionic/angular';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailValidator } from 'src/validators/email';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public loading: MethodsService,
    public toast: MethodsService,
    public storage: Storage) {
    this.loginForm = formBuilder.group({
      email: ['', Validators.compose([Validators.required, EmailValidator.isValid])],
      password: ['', Validators.compose([Validators.minLength(6), Validators.required])]
    });
  }

  ngOnInit() {
  }
  loginUser() {
    this.auth.signInWithEmailAndPassword(this.loginForm.value.email, this.loginForm.value.password)
      .then((response) => {
       // this.storage.set('user', response.user.uid);
        this.loading.presentLoading(2000)
        this.toast.presentToast('Login bem-sucedido.',2000,'primary');
        this.navCtrl.navigateRoot('start');
      }).catch((error) => {
        if (error.code == "auth/wrong-password") {
          this.loginForm.controls['password'].setValue(null); //limpa o input da senha
          this.loading.presentLoading(1000);
          this.toast.presentToast('Senha incorreta digite novamente.',1000,'danger')
        }
        else if (error.code == "auth/user-not-found") {
          this.loading.presentLoading(1000)
          this.loginForm.controls['email'].setValue(null);// limpa o input do email
          this.loginForm.controls['password'].setValue(null); //limpa o input da senha 
          this.toast.presentToast('Usuário incorreto ou não cadastrado.',1000,'danger')

        }

      });


  }
  resetPwd() {                                //Função para redirecionar para a página de redefinição de senha
    this.navCtrl.navigateForward('reset');
  }

  createAccount() {
    this.navCtrl.navigateForward('register');//Função para redirecionar para  de cadastro
  }
}
