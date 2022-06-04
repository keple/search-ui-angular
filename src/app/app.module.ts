import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { MainFrameComponent } from './mainFrame/mainFrame.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatMenuModule} from '@angular/material/menu';
import {MatButtonModule} from '@angular/material/button';
import {MockServiceModule} from '../services/mocks/mockService.module';
import { SearchViewComponent } from './search-view/search-view.component';
import { AppRoutingModule } from './app-routing.module';
import { FileViewComponent } from './file-view/file-view.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import {MatCardModule} from "@angular/material/card";

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    MainFrameComponent,
    MenuItemComponent,
    SearchViewComponent,
    FileViewComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule,
    MatMenuModule,
    MatButtonModule,
    MockServiceModule,
    AppRoutingModule,
    MatCardModule
  ],
  providers: [],
  bootstrap: [MainFrameComponent]
})
export class AppModule { }
