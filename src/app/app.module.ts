import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatCardModule} from '@angular/material/card';
import { AppComponent } from './app.component';
import {LoaderComponent} from "./loader/loader.component";
import {ItemService} from "./services/item-service";
import {HttpClient, HttpClientModule, HttpHandler} from "@angular/common/http";
import {ItemComponent} from "./loader/item/item.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {ActivatedRoute, RouterLink, RouterOutlet} from "@angular/router";
import {ItemEditComponent} from "./itemEdit/item-edit.component";

@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent,
    ItemComponent,
    ItemEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    RouterLink,
    RouterOutlet
  ],
  providers: [ItemService,ActivatedRoute],
  bootstrap: [AppComponent]
})
export class AppModule { }
