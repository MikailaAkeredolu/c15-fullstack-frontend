import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddHomeComponent } from './add-home/add-home.component';
import { UpdateHomeComponent } from './update-home/update-home.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { HomeDetailComponent } from './home-detail/home-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddHomeComponent,
    UpdateHomeComponent,
    HomeDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
   provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
