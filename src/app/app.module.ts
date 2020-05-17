import { ComponentsModule } from './components/components.module';
import { RegisterPageModule } from './pages/register/register.module';
import { StartPageModule } from './pages/start/start.module';
import { LoginPageModule } from './pages/login/login.module';
import { StartPage } from './pages/start/start.page';
import { ResetPage } from './pages/reset/reset.page';
import { RegisterPage } from './pages/register/register.page';
import { LoginPage } from './pages/login/login.page';
import { AngularFireAuth } from '@angular/fire/auth';
import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule,FormControl, ReactiveFormsModule } from '@angular/forms';
import { AngularFireModule } from '@angular/fire';

import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AngularFirestoreModule} from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AngularFireDatabase } from '@angular/fire/database';

import { IonicModule, NavParams } from '@ionic/angular';
import { environment } from '../environments/environment';
import { IonicStorageModule } from '@ionic/storage';




@NgModule({
  declarations: [
    AppComponent,
    
    
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireDatabaseModule ,
    AngularFirestoreModule,
    AngularFireStorageModule ,
    FormsModule,
    IonicModule,
    IonicModule.forRoot(), 
    AngularFireModule.initializeApp(environment.firebase),
    ReactiveFormsModule,
    StartPageModule,
    LoginPageModule,
    RegisterPageModule,
    IonicStorageModule.forRoot(),
    ComponentsModule
   
    
  ],
  entryComponents:[
   StartPage,
   LoginPage,
   RegisterPage
    
  ],
  providers: [
    FormControl,
    AngularFireAuth,
    StatusBar,
    SplashScreen,
    StatusBar,
    AngularFireDatabase ,
    NavParams,
     ],
  bootstrap: [AppComponent]
})
export class AppModule { }