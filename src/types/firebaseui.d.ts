// src/types/firebaseui.d.ts

declare module 'firebaseui' {
    import firebase from 'firebase/compat/app';
  
    class AuthUI {
      constructor(auth: firebase.auth.Auth);
      start(element: HTMLElement | string, uiConfig: any): void;
      reset(): void;
      delete(): void;
      getInstance(): AuthUI | null;
    }
  
    namespace firebaseui {
      class AuthUI extends AuthUI {}
    }
  
    export = firebaseui;
  }