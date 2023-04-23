import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CardComponent } from '../card/card.component';
import { SectionComponent } from './section.component';


@NgModule({
  declarations: [
    CardComponent,
    SectionComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: []
})
export class AppModule { }