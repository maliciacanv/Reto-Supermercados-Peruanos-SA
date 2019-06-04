import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';

import { environment } from '../environments/environment'

import { APP_ROUTING } from './app.routes';

import { ServiceDatabaseService } from './service/service-database.service';
import { ServiceFirestoreService } from './service/service-firestore.service';

import { AppComponent } from './app.component';
import { CreateClientComponent } from './components/create-client/create-client.component';
import { DashboardClientComponent } from './components/dashboard-client/dashboard-client.component';

@NgModule({
  declarations: [
    AppComponent,
    CreateClientComponent,
    DashboardClientComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING, 
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [ ServiceDatabaseService, ServiceFirestoreService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
