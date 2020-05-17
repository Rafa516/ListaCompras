import { MethodsService } from 'src/app/methods.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MenuComponent } from './menu/menu.component';


@NgModule({
    imports: [
      CommonModule,
      FormsModule,
      IonicModule,
      ReactiveFormsModule
     
    ],
    exports:[MenuComponent],
    declarations: [MenuComponent]
  })
  export class ComponentsModule {}