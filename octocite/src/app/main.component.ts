import { Component } from '@angular/core';

@Component({
  selector: 'main-page',
  templateUrl: './main.component.html'
})
export class MainComponent {
  typeString = 1;
  inputString = '';
  
  onSubmit() {
    switch(this.typeString) {
      case 1:
        // mla format
        break;
      case 2:
        // apa format
        break;
      case 3:
        // chicago format
        break;
    }
  }
}