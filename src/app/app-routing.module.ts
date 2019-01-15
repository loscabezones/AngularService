import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components//
import { ProfileComponent } from './components/profile/profile.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: 'Profile', component: ProfileComponent },
  { path: 'Home', component: HomeComponent },
  { path: '', pathMatch: 'full', redirectTo: 'HomeComponent' },
  { path: '**', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
