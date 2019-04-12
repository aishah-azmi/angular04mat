import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'trg-template-syntax',
  templateUrl: './template-syntax.html'
})

export class  TemplateSyntax {
  /*properties/attributes*/

  oneClassToTemplate: string = 'BINDED';
  twoClassToTemplate: string = '2 BINDED';
  binding: string = "BINDING";
  hoverCount: number = 0;
  @Output() bindingEmitter = new EventEmitter<string>();


  constructor() {
  }

  plusCount() {
    this.hoverCount += 1;
  }
}
