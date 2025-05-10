import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-code-component',
  imports: [],
  templateUrl: './code-component.component.html',
  styleUrl: './code-component.component.scss'
})
export class CodeComponentComponent {
  @Input() code: { type: 'input' | 'output', text: string }[] = [];
}
