import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ChildService} from './shared/child/child.service';
import { ChildListComponent } from './child-list/child-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ChildListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [ChildService],
  bootstrap: [AppComponent]
})
export class AppModule { }
