import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

import * as Sentry from '@sentry/capacitor';
import * as SentryAngular from '@sentry/angular';
import { Integrations } from '@sentry/tracing';

if (environment.production) {
  enableProdMode();
}

Sentry.init(
  {
    integrations: [
      new Integrations.BrowserTracing({
        tracingOrigins: ['localhost'],
      }),
    ]
  },
  // Forward the init method from @sentry/angular
  SentryAngular.init
);

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.log(err));
