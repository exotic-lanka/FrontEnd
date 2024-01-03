import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { FooterMainContextComponent } from './components/footer-main-context/footer-main-context.component';
import { NotFoundPageComponent } from './components/not-found-page/not-found-page.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import {FontAwesomeModule} from "@fortawesome/angular-fontawesome";


@NgModule({
    declarations: [
        ShareComponent,
        FooterMainContextComponent,
        NotFoundPageComponent,
        MainHeaderComponent
    ],
    exports: [
        MainHeaderComponent,
        FooterMainContextComponent
    ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    FontAwesomeModule
  ]
})
export class ShareModule { }
