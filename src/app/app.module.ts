import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BuilderModule } from '@builder.io/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent
  ],
  imports: [
    BrowserModule,
    BuilderModule.forRoot("f4a9f2219dad40039233427d9c9c18bd"),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
