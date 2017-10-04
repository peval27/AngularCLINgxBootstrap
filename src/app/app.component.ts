import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import './operators';

/**
 * This class represents the main application component.
 */
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
})

export class AppComponent {
    /**
     * Constructor
     */
    constructor(
        private translate: TranslateService
    ) {
        translate.addLangs(['it', 'en']);
        translate.setDefaultLang('en');

        const browserLanguage = translate.getBrowserLang();
        // Defaults to English
        translate.use(browserLanguage.match(/it|en/) ? browserLanguage : 'en');
    }
}
