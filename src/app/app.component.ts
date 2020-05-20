import { AngularFireAuth } from '@angular/fire/auth';
import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';


import { LoginPage } from './pages/login/login.page';
import { StartPage } from './pages/start/start.page';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
 
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    public auth: AngularFireAuth,
    public storage : Storage,
    private router: Router) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.auth.onAuthStateChanged(user => {    //Implementação do auto-login do usuário
        if (user) {
                                                 
         this.router.navigate(["/start"]);      //Se o usuário estiver logado continua na página start
          this.splashScreen.hide();
        }
        else {
          this.router.navigate(["/login"]);     //Senão e enviado para a página de login
          this.splashScreen.hide();
        }
      })
      this.statusBar.overlaysWebView(true);             // iniciando o app com o status bar do aparelho usado
      this.statusBar.backgroundColorByHexString('#04B4AE');// definindo a cor do stattus bar
     
      this.splashScreen.hide(); 
    });
  }
}
