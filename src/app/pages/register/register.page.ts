import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavParams, NavController, AlertController, LoadingController } from '@ionic/angular';
import { EmailValidator } from 'src/validators/email';
import { JanPage } from '../start/jan/jan.page';
import { MethodsService } from 'src/app/methods.service';
import { Storage } from '@ionic/storage';




@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  signupForm: FormGroup;
  name;
  

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public formBuilder: FormBuilder,
    public auth: AngularFireAuth,
    public firestore: AngularFirestore,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public load: MethodsService,
     public storage: Storage,
    public toast: MethodsService


  ) {
    this.signupForm = formBuilder.group({
      email: ['', ([Validators.minLength(1), Validators.required, EmailValidator.isValid])],  //Utilizando o formbuilder para agrupar as informações
      password: ['', ([Validators.minLength(6), Validators.required])],
      retype: ['', ([Validators.minLength(6), Validators.required])],
      firstName: ['', ([Validators.maxLength(30), Validators.required])],
      lastName: ['', ([Validators.maxLength(30)])]
    });
  }

  ngOnInit() {
  
  }
  async signupUser() {
    if (this.signupForm.value.password == this.signupForm.value.retype) { //autentificação do usuário no Firebase Authentication
      
      this.auth.createUserWithEmailAndPassword(this.signupForm.value.email, this.signupForm.value.password)
        .then((response) => {
          let userId = response.user.uid
          let userDoc = this.firestore.doc<any>('Registro/' + userId); // implementando o documento de registro no Firestore
          userDoc.set({
            firstName: this.signupForm.value.firstName,
            lastName: this.signupForm.value.lastName,
            email: this.signupForm.value.email,

          });
          this.name = userDoc.get();
          
          this.load.presentLoading(2000)
          this.toast.presentToast('             Usuário Cadastrado com Sucesso.',2000,'success')
          this.navCtrl.navigateRoot('login');

        }, async (error) => {
          if (error.code == "auth/email-already-in-use") {     //Condição que verifica se o email, já está registrado
            this.signupForm.controls['email'].setValue(null); //zerando o valor do input de email
            this.signupForm.controls['password'].setValue(null);//zerando o valor do input de password
            this.signupForm.controls['retype'].setValue(null);//zerando o valor do input de confirmação de senha
            this.toast.presentToast('                        E-mail já cadastrado.',1000,'danger')
            this.load.presentLoading(1000)
          }
        })
    } else {
      this.signupForm.controls['retype'].setValue(null);    //condição que inválida a confirmação de senhas, se estivere diferentes
      this.toast.presentToast('                 Confirmação de senha inválida.',1000,'danger')
      this.load.presentLoading(1000)
    }
  }

 

}
