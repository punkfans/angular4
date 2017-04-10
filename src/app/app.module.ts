import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyRedditComponent } from './my-reddit/my-reddit.component';
import { RedditDataServiceService } from './reddit-data-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyRedditComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [RedditDataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
