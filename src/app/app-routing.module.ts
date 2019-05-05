
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent} from './home/home.component';
import { MarsComponent } from './mars/mars.component';

const routes: Routes = [
  {
    path: 'home',
   component: HomeComponent
  },
  {
    path: '',
   redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'mars',
    component: MarsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
