import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumDetailsComponent } from './album-details/album-details.component';
import { AboutComponent } from './about/about.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, RouterModule.forRoot([
    {path:'', component: AlbumListComponent},
    {path:'about', component: AboutComponent},
    {path:'album/:id', component: AlbumDetailsComponent}
  ]) ],
  declarations: [ AppComponent, AlbumListComponent, AlbumDetailsComponent, AboutComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
