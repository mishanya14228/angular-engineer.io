import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ApiService } from "./services/api.service";
import { MainComponent } from "./pages/main/main.component";
import { HttpClientModule } from "@angular/common/http";
import { InfiniteScrollModule } from "ngx-infinite-scroll";
import { SearchPipe } from "./pipes/search.pipe";
import { FormsModule } from "@angular/forms";
import { FilterPipe } from './pipes/filter.pipe';

@NgModule({
  declarations: [AppComponent, MainComponent, SearchPipe, FilterPipe],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
