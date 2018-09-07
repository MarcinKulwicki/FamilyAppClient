import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import {ChildService} from './service/child/child.service';
import { ChildListComponent } from './child-list/child-list.component';

import { MatButtonModule, MatCardModule, MatInputModule, MatListModule, MatToolbarModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FatherComponent } from './father/father.component';
import {FatherService} from './service/father/father.service';
import {FormsModule} from '@angular/forms';
import { FamilyComponent } from './family/family.component';
import {FamilyService} from './service/family/family.service';


@NgModule({
  declarations: [
    AppComponent,
    ChildListComponent,
    FatherComponent,
    FamilyComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatListModule,
    MatToolbarModule,
    FormsModule
  ],
  providers: [ChildService , FatherService , FamilyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
