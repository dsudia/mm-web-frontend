import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule, ListboxModule, MessagesModule } from 'primeng/primeng';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './profile/profile.component';
import { SelectComponent } from './select/select.component';
import { StatusComponent } from './status/status.component';

@NgModule({
  declarations: [
    ProfileComponent,
    SelectComponent,
    StatusComponent,
  ],
  exports: [
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    CarouselModule,
    FormsModule,
    ListboxModule,
    MessagesModule,
    ReactiveFormsModule,
  ],
  providers: []
})
export class ProfileModule { }
