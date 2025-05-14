import { Component, input } from '@angular/core';
import { CodeComponentComponent } from '../code-component/code-component.component';
import { code } from '../models/code';

@Component({
  selector: 'app-card-code',
  imports: [CodeComponentComponent],
  templateUrl: './card-code.component.html',
  styleUrl: './card-code.component.scss',
})
export class CardCodeComponent {
  code = input<code>([
    { type: 'input', text: 'fraise = [12, 10, 18, 7, 15, 3]' },
    { type: 'input', text: 'print(fraise[2])' },
    { type: 'output', text: '18' },
    { type: 'input', text: 'fraise[1] = 11' },
    { type: 'input', text: 'print(fraise)' },
    { type: 'output', text: '[12, 11, 18, 7, 15, 3]' },
  ]);
  title = input<string>('Accès et modification');
  text = input<string>('Erreur si l’indice est hors de portée :');
}
