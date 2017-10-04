import { NgModule } from '@angular/core';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { DatepickerModule } from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule, Http } from '@angular/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

/** Environment */
import { common } from './../environments/common';
import { environment } from './../environments/environment';

/** Third party libraries */
import { AgmCoreModule } from '@agm/core';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

export function HttpLoaderFactory(http: Http) {
    return new TranslateHttpLoader(http);
}

import * as firebase from 'firebase';

firebase.initializeApp(common.firebase, 'my-app');

@NgModule({
    imports: [
        AngularFireModule.initializeApp(common.firebase, 'my-app'),
        BrowserModule,
        CollapseModule.forRoot(),
        HttpModule,
        AppRoutingModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: HttpLoaderFactory,
                deps: [Http]
            }
        }),
        AgmCoreModule.forRoot({
            apiKey: 'apiKey',
            libraries: ['places']
        }),
        DatepickerModule.forRoot()
    ],
    exports: [TranslateModule],
    declarations: [AppComponent],
    providers: [
        AngularFireAuth,
        AngularFireDatabase
    ],
    bootstrap: [AppComponent]

})
export class AppModule { }
