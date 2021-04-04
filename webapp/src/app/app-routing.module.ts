import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RoomComponent } from './components/room/room.component';


const routes: Routes = [
  
  {
    component: RoomComponent,
    path: "room/:roomid"
  },

  {
    component: HomeComponent,
    path: "home"
  },

  {
    path: "**",
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
