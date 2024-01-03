import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessComponent } from './process.component';
import {HomePageContextComponent} from "./components/home-page-context/home-page-context.component";

const routes: Routes = [{ path: '', component: ProcessComponent, children:[
    {path:'',redirectTo:'/process/home',pathMatch:'full'},
    {path:'home',component:HomePageContextComponent},
  ] }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
