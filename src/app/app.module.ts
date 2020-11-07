import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent, BasicInfoComponent, ClientsComponent, ContactComponent, LinesComponent, NavigationComponent, NavigationMobComponent, PortraitsComponent, ProfileComponent, SocialComponent } from './components'; 
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { CommonService } from './services';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BasicInfoComponent,
    ProfileComponent,
    LinesComponent,
    SocialComponent,
    NavigationComponent,
    AboutComponent,
    ClientsComponent,
    PortraitsComponent,
    ContactComponent,
    NavigationMobComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  exports: [
    BasicInfoComponent,
    ProfileComponent,
    LinesComponent,
    SocialComponent,
    NavigationComponent,
    AboutComponent,
    ClientsComponent,
    PortraitsComponent,
    ContactComponent,
    NavigationMobComponent,
  ],
  providers: [CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
