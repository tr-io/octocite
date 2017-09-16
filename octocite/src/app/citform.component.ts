import { Component } from '@angular/core';

@Component({
  selector: 'citation-form',
  templateUrl: './citform.component.html'
})
export class CitFormComponent {
  submitted = false;
  
  typeString = 1;
  authorFirstName = '';
  authorLastName = '';
  sourceTitle = '';
  sourceContainer = '';
  version = '';
  number = '';
  publisher = '';
  pubDate = '';
  pubLoc = '';
  sourceURL = '';
  isbn = '';
  pages = '';
  
  onSubmit() {
    this.submitted = true;
  }
  
  retry() {
    this.submitted = false;
  }
}