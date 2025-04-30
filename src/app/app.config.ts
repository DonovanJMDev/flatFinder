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
        apiKey: 'AIzaSyCZGPYMlX3FY547NliwDVwqSHKHv9gm1PE',
        authDomain: 'rentease-5a03e.firebaseapp.com',
        projectId: 'rentease-5a03e',
        storageBucket: 'rentease-5a03e.firebasestorage.app',
        messagingSenderId: '682429033217',
        appId: '1:682429033217:web:f5e263c5f3f0e0fa6f0900',
        measurementId: 'G-JH61JPNSE9',
      })
    ),

    provideAuth(() => getAuth()),

    provideFirestore(() => getFirestore()),
  ],
};
