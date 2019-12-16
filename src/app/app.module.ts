import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginserviceService } from './services/loginservice.service'
import { MasterserviceService } from './services/masterservice.service'
import { ItemserviceService } from './services/itemservice.service'
import { SeekserviceService } from './services/seekservice.service'
import { ChatserviceService } from './services/chatservice.service'
import { NotiserviceService } from './services/notiservice.service'
import { ShopserviceService } from './services/shopservice.service';
import { HomeComponent } from './home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatIconModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    LoginserviceService,
    MasterserviceService,
    ItemserviceService,
    SeekserviceService,
    ChatserviceService,
    NotiserviceService,
    ShopserviceService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
