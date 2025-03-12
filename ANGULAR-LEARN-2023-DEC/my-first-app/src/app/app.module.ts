import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { AppServerComponent } from './server/app.server.component';
import { ServerEventBindingDemo } from './server-event-binding-demo/server-event-binding-demo';


@NgModule({
  declarations: [
    AppComponent,
    AppServerComponent,
    ServerEventBindingDemo
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
