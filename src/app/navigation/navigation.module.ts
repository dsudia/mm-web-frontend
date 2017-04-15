import { NgModule } from '@angular/core';
import { MenuModule, ButtonModule } from 'primeng/primeng';
import { NavigationComponent } from './navigation/navigation.component';

@NgModule({
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ],
  imports: [
    ButtonModule,
    MenuModule,
  ],
})
export class NavigationModule { }
