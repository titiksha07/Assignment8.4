import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Logger } from "angular2-logger/core";
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CricketerComponent } from './cricketlist/cricketlist.component';
import { CricketerService } from './services/cricket-service';
import {CriketerDropDownService} from './services/cricketdropdown-service'

@NgModule({
  declarations: [
    AppComponent,
    CricketerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [CriketerDropDownService,
              Logger],
  bootstrap: [AppComponent]
})
export class AppModule { }
