import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';



import { AppComponent } from './app.component';
import { CardContactsComponent } from './card-contacts/card-contacts.component';


@NgModule({
  declarations: [
    AppComponent,
    CardContactsComponent
  ],
  imports: [
    BrowserModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
