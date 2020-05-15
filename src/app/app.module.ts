import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { NgxPaginationModule } from "ngx-pagination";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { HomeComponent } from "./components/home/home.component";
import { HistoryComponent } from "./components/history/history.component";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ErrorMsgComponent } from "./components/error-msg/error-msg.component";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HistoryComponent,
    NavbarComponent,
    ErrorMsgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  exports: [ErrorMsgComponent],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
