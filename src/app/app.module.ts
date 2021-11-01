import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { UsersComponent } from './components/users/users.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { PropertyComponent } from './components/data/property/property.component';
import { StyleComponent } from './components/data/style/style.component';
import { ClassComponent } from './components/data/class/class.component';
import { EventComponent } from './components/data/event/event.component';
import { TwoWayComponent } from './components/data/two-way/two-way.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent,
    AboutComponent,
    UsersComponent,
    NotFoundComponent,
    PropertyComponent,
    StyleComponent,
    ClassComponent,
    EventComponent,
    TwoWayComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
