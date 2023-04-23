import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
})

export class CardComponent {
  @Input() titulo?: string;
  @Input() subTitulo?: string;
  @Input() img?: string;
  @Input() reverse: boolean = false;
}
