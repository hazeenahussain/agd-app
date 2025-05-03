import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageAgdComponent } from './home-page-agd/home-page-agd.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
    component: HomePageAgdComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
