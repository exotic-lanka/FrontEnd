import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { HomePageContextComponent } from './components/home-page-context/home-page-context.component';
import { HomePageBodyComponent } from './components/home-page-context/inner/home-page-body/home-page-body.component';
import {ShareModule} from "../share/share.module";


@NgModule({
  declarations: [
    ProcessComponent,
    HomePageContextComponent,
    HomePageBodyComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    ShareModule
  ]
})
export class ProcessModule { }
