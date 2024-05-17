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
import { firebaseConfig } from './environment/environment';

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
