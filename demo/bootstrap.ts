import './vendor/polyfills';

import {environment} from './environment';
import {enableProdMode} from '@angular/core';

if (environment.production) {
    enableProdMode();
}

import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BaseDemoModule} from './demo.module';

platformBrowserDynamic().bootstrapModule(BaseDemoModule);
