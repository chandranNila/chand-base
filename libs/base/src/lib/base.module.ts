import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader'

import { ComAComponent } from './components/com-a/com-a.component';
import { ComBComponent } from './components/com-b/com-b.component';
import { BaseRoutingModule } from './base-routing.module';

export function BaseHttpLoaderFactory(http: HttpClient){
  return new TranslateHttpLoader(http, 'assets/i18n/base.', '.json');
}

@NgModule({
  declarations: [
    ComAComponent,
    ComBComponent
  ],
  imports: [
    BaseRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: BaseHttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  exports: [
  ]
})
export class BaseModule { }
