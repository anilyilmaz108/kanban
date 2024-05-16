import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { SharedModule } from './shared/shared.module';
import { PrivateComponent } from './layouts/private/private.component';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { PublicComponent } from './layouts/public/public.component';
import { HttpClientModule } from '@angular/common/http';

const firebaseConfig = {
  projectId: 'kanban-1b2c1',
  appId: '1:858095447541:web:6a93e8ad1d655d6838c4bc',
  storageBucket: 'kanban-1b2c1.appspot.com',
  apiKey: 'AIzaSyA9l5MPa9nWYTVbpijKpajT02CnNNEUpCU',
  authDomain: 'kanban-1b2c1.firebaseapp.com',
  messagingSenderId: '858095447541',
  measurementId: 'G-K8K172DDNX',
};

@NgModule({
  declarations: [AppComponent, PrivateComponent, PublicComponent],
  imports: [BrowserModule, AppRoutingModule, SharedModule,  HttpClientModule,],
  providers: [
    provideFirebaseApp(() => initializeApp(firebaseConfig)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideAnalytics(() => getAnalytics()),
    provideAnimationsAsync(),
    ScreenTrackingService,
    UserTrackingService,
    
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
