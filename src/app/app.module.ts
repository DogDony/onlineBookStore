import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule , JsonpModule } from '@angular/http'
import { FormsModule } from '@angular/forms';
import { BookServer } from './components/dataServer/Datas';



import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { BookListComponent } from './components/book-list/book-list.component';
import { BaseComponent } from './components/base/base.component';
import { SearchComponent } from './components/book-list/search/search.component';
import { ContentComponent } from './components/book-list/content/content.component';
import { BookItemComponent } from './components/book-list/content/book-item/book-item.component';


@NgModule({
  declarations: [
    AppComponent,
    BookListComponent,
    BaseComponent,
    SearchComponent,
    ContentComponent,
    BookItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    JsonpModule,
    FormsModule
  ],
  providers: [
    BookServer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
