import './vendor.ts';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app.routes';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
// import { LayoutsModule } from './layouts';
// import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
// import { HttpInterceptorProviders } from './blocks/http-interceptor';
// import { ConfigService } from './config/config.service';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
// import { TranslateHttpLoader } from '@ngx-translate/http-loader';

registerLocaleData(en);

// export function createTranslateHttpLoader(http: HttpClient) {
//     return new TranslateHttpLoader(http, '/content/i18n/', '.json');
// }

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        // ShareModule.forRoot(),
        // AuthModule
        // LayoutsModule, // ccm
        // TranslateModule.forRoot({
        //     loader: {
        //         provide: TranslateLoader,
        //         useFactory: createTranslateHttpLoader,
        //         deps: [HttpClient]
        //     }
        // }),
        BrowserAnimationsModule,
        // NgZorroAntdModule
    ],
    declarations: [AppComponent],
    providers: [
        // { provide: NZ_I18N, useValue: en_US },
        // ConfigService,
        // HttpInterceptorProviders
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
    /* constructor(private dpConfig: NgbDatepickerConfig) {
        this.dpConfig.minDate = { year: moment().year() - 100, month: 1, day: 1 };
    } */
}
