import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { WidgetComponent } from './widget/widget.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    WidgetComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
