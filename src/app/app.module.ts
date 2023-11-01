import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DrawerComponent } from './drawer/drawer.component';
import { InViewportModule } from 'ng-in-viewport';
import { RESPONSEComponent } from './response/response.component';
import { ResponseTbl2Component } from './response-tbl2/response-tbl2.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    ContentComponent,
    NavbarComponent,
    DrawerComponent,
    RESPONSEComponent,
    ResponseTbl2Component,
    
  ],
  imports: [
    BrowserModule,

    InViewportModule,
    AppRoutingModule
  ],
  providers: [],
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  bootstrap: [AppComponent]
})
export class AppModule { }
