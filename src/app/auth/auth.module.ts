import { NgModule } from '@angular/core';
import { InputTextModule, PasswordModule } from 'primeng/primeng';
import { LoginAndRegisterComponent } from './login-and-register/login-and-register.component';
import { SplashComponent } from './splash/splash.component';

@NgModule({
  declarations: [
    LoginAndRegisterComponent,
    SplashComponent
  ],
  exports: [
    LoginAndRegisterComponent
  ],
  imports: [
    InputTextModule,
    PasswordModule,
  ],
})
export class AuthModule { }
