import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatNativeDateModule } from '@angular/material/core';

import { HomepageComponent } from './homepage.component';
import { MaterialModule } from '../material.module';
import { config } from 'rxjs';
import { WindowComponent } from './common/window/window.component';

@NgModule({
  declarations: [
    HomepageComponent,
    WindowComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MaterialModule,
    MatNativeDateModule
  ],
  providers: [],
  bootstrap: [HomepageComponent]
})
export class AppModule { }
