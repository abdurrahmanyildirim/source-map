import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';

import { AppComponent } from './app.component';
import { AirbrakeErrorHandler } from './airbrake.service';
import { ErrorComponent } from './components/error/component';
import { HttpClientModule } from '@angular/common/http';
import { BugsNagErrorService } from './bugsnag.service';


@NgModule({
  declarations: [
    AppComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [{ provide: ErrorHandler, useClass: BugsNagErrorService }],
  bootstrap: [AppComponent]
})
export class AppModule {

}
// Bugs { provide: ErrorHandler, useClass: BugsNagErrorService }
// Airbrake { provide: ErrorHandler, useClass: AirbrakeErrorHandler }
