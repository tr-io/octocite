import { Component } from '@angular/core';

@Component({
  selector: 'citation-form',
  templateUrl: './citform.component.html'
})
export class CitFormComponent {
  typeString = 1;
  submitted = false;
  
  _mla = false;
  _apa = false;
  _chicago = false;
  
  authorFirstName = '';
  authorLastName = '';
  sourceTitle = '';
  sourceContainer = '';
  version = '';
  publisher = '';
  pubDate = '';
  pubLoc = '';
  
  onSubmit() {
    this._mla = false;
    this._apa = false;
    this._chicago = false;
    
    switch(this.typeString)
    {
      case 1:
        this._mla = true;
        break;
      case 2:
        this._apa = true;
        break;
      case 3:
        this._chicago = true;
        break;
    }
    
    this.submitted = true;
  }
  
  retry() {
    this.submitted = false;
  }
}