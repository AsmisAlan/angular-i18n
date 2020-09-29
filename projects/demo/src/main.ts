import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';
import { loadTranslations } from '@angular/localize';

if (environment.production) {
  enableProdMode();
}

loadTranslations({
  welcome: "Bienvenido",
  hello: "Hola",
})

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
