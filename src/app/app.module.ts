import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeModuleModule } from './home-module/home-module.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HomeModuleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
