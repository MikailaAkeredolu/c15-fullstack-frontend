import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { HomeDetailComponent } from './home-detail/home-detail.component';

const routes: Routes = [

  {path: 'homes', component: HomeComponent},
  {path: 'addhome', component: AddHomeComponent},
  {path: 'homedetail/:id', component: HomeDetailComponent},
  {path: '', redirectTo:'homes', pathMatch:'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
