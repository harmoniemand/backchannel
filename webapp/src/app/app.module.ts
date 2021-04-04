import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {SocketIoModule} from "ngx-socket-io";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlayerComponent } from './components/player/player.component';
import { RoomComponent } from './components/room/room.component';
import { ClarityModule } from '@clr/angular';
import { HomeComponent } from './components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerComponent,
    RoomComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    SocketIoModule.forRoot({
      url: 'http://localhost:3000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
