import {
  ApplicationConfig,
  provideZoneChangeDetection,
  importProvidersFrom,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideFirestore, getFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),

    provideFirebaseApp(() =>
      initializeApp({
        apiKey: 'AIzaSyAR9-YKU3HCMOOSL31E9JtflmK-nIpvaVs',
        authDomain: 'flatfinder-14cd7.firebaseapp.com',
        projectId: 'flatfinder-14cd7',
        storageBucket: 'flatfinder-14cd7.firebasestorage.app',
        messagingSenderId: '508201601608',
        appId: '1:508201601608:web:b785d53c88e8b95df8667d',
        measurementId: 'G-WSF6NJQ4ST',
      })
    ),

    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),
  ],
};
