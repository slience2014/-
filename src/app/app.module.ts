import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HomepageComponent } from './home/homepage/homepage.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ReservationComponent } from './reservation/reservation.component';
import { RoomModule } from './room/room.module';
import { NavbarComponent } from './navbar/navbar.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { FootComponent } from './foot/foot.component';
import { MessageComponent } from './message/message.component';



@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    AboutusComponent,
    ReservationComponent,

    NavbarComponent,

    HomeComponent,

    FootComponent,

    MessageComponent
  ],
  imports: [
    RoomModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
