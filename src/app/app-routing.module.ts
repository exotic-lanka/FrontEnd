import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NotFoundPageComponent} from "./modules/share/components/not-found-page/not-found-page.component";

const routes: Routes = [
  {path:'', redirectTo:'/process/home', pathMatch:'full'},
  { path: 'process', loadChildren: () => import('./modules/process/process.module').then(m => m.ProcessModule) },
  { path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule) },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule) },
  {path:'**',component:NotFoundPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash:true,scrollPositionRestoration:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
