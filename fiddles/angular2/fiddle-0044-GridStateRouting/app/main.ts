import { bootstrap }    from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import { AppComponent } from './app.component';
import { APP_ROUTER_PROVIDERS } from './app.routes';
import * as meta from './meta';

console.log("%c" + meta.consoleTag, 'font-style: italic; font-size: 20px;');
console.log("%c" + meta.urls.github, "color: blue; font-style: italic; text-decoration: underline; background-color: #FFFF00;");
console.group();
enableProdMode();
bootstrap(AppComponent, [APP_ROUTER_PROVIDERS])
    .catch(err => meta.onError(err));
