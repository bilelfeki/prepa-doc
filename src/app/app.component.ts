import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CodeComponentComponent } from "./code-component/code-component.component";
import { code } from './models/code';

@Component({
  selector: 'app-root',
  imports: [CodeComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'doc-prepa';
  code1:code = [
    { type: 'input', text: 'liste = [1, 2, 3]' },
    { type: 'input', text: 'print(liste)' },
    { type: 'output', text: '[1, 2, 3]' }
  ];

  code2:code = [
    { type: 'input', text: "liste = [1, 'ok', [5, 10]]" },
    { type: 'input', text: 'print(liste)' },
    { type: 'output', text: "[1, 'ok', [5, 10]]" }
  ] as code;

  code3:code = [
    { type: 'input', text: 'fraise = [12, 10, 18, 7, 15, 3]' },
    { type: 'input', text: 'print(fraise[2])' },
    { type: 'output', text: '18' },
    { type: 'input', text: 'fraise[1] = 11' },
    { type: 'input', text: 'print(fraise)' },
    { type: 'output', text: '[12, 11, 18, 7, 15, 3]' }
  ];

  code4:code = [
    { type: 'input', text: 'print(fraise[6])' },
    { type: 'output', text: 'IndexError: list index out of range' }
  ];

  code5:code = [
    { type: 'input', text: 'fraise = [12, 11, 18, 7, 15, 3]' },
    { type: 'input', text: 'fraise[2:4]' },
    { type: 'output', text: '[18, 7]' },
    { type: 'input', text: 'fraise[2:5]' },
    { type: 'output', text: '[18, 7, 15]' }
  ];

  code6:code = [
    { type: 'input', text: 'A = [[11, 12, 13], [21, 22, 23], [31, 32, 33]]' },
    { type: 'input', text: 'print(A)' },
    { type: 'output', text: '[[11, 12, 13], [21, 22, 23], [31, 32, 33]]' }
  ];

  code7:code = [
    { type: 'input', text: "fruits = ['pomme', 'banane', 'orange']" },
    { type: 'input', text: "fruits.append('kiwi')" },
    { type: 'input', text: 'print(fruits)' },
    { type: 'output', text: "['pomme', 'banane', 'orange', 'kiwi']" }
  ];

  code8:code = [
    { type: 'input', text: 't = (1, 2, 3)' },
    { type: 'input', text: 'print(t)' },
    { type: 'output', text: '(1, 2, 3)' }
  ];

  code9 :code= [
    { type: 'input', text: "t = ('bonjour', 42, [1, 2])" },
    { type: 'input', text: 'print(t)' },
    { type: 'output', text: "('bonjour', 42, [1, 2])" }
  ];

  code10:code = [
    { type: 'input', text: 't[0] = 10' },
    { type: 'output', text: "TypeError: 'tuple' object does not support item assignment" }
  ];

  code11:code = [
    { type: 'input', text: 'l = [1, 2, 3]' },
    { type: 'input', text: 't = tuple(l)' },
    { type: 'input', text: 'print(t)' },
    { type: 'output', text: '(1, 2, 3)' },
    { type: 'input', text: 'l2 = list(t)' },
    { type: 'input', text: 'print(l2)' },
    { type: 'output', text: '[1, 2, 3]' }
  ] ;
  }

