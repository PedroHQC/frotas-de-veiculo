import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent {
  public isAtivo: boolean = false;
  public reverse: object = {
    'reverse': this.isAtivo ? 'flex-row' : 'flex-row-reverse'};
}
