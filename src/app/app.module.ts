import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

//ruting
import { AppRoutingModule } from './app-routing.module';

//componentes//
import { AppComponent } from './app.component';
import { ProfileComponent } from './components/profile/profile.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { AutochatComponent } from './components/autochat/autochat.component';
import { AutochatwithserviceComponent } from './components/autochatwithservice/autochatwithservice.component';
import { AutochatinputComponent } from './components/autochatinput/autochatinput.component';
import { AutochatoutputComponent } from './components/autochatoutput/autochatoutput.component';

@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    HeaderComponent,
    HomeComponent,
    AutochatComponent,
    AutochatwithserviceComponent,
    AutochatinputComponent,
    AutochatoutputComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
