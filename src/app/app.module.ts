import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {routing} from './app.routing';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { SidePanel } from './components/side-panel.component';
import { HouseList } from './components/house-list.component';
import { CentralContent } from './components/central-content.component';

import {NavBar} from './components/nav-bar.component';
import {Register} from './components/register.component';

import { RegisterService} from './services/register.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SidePanel,
    HouseList,
    CentralContent,
    NavBar,
    Register
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [RegisterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
