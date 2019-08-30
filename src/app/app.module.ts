import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FootballPitchComponent } from './football-pitch/football-pitch.component';
import { ArrayNumberPipe } from './pipes/array-number.pipe';
import { FootballPitchService } from './services/football-pitch.service';

@NgModule({
  declarations: [
    AppComponent,
    FootballPitchComponent,
    ArrayNumberPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FootballPitchService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
