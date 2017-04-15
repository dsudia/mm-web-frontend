import { Routes, RouterModule } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginAndRegisterComponent } from './auth/login-and-register/login-and-register.component';
import { SplashComponent } from './auth/splash/splash.component';

const routes: Routes = [
    { path: '', component: SplashComponent },
    { path: 'login',  component: LoginAndRegisterComponent}
];

export const router = RouterModule.forRoot(routes);

export const routerForTesting = RouterTestingModule.withRoutes(routes);
