import { router } from './app.router';
import { UserService } from './user.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AuthModule } from './auth/auth.module';
import { NavigationModule } from './navigation/navigation.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';


@NgModule({
  bootstrap: [AppComponent],
  declarations: [
    AppComponent,
  ],
  imports: [
    AuthModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    NavigationModule,
    ProfileModule,
    router,
  ],
  providers: [UserService],
})
export class AppModule { }
