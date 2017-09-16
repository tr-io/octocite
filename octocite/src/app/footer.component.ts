import { Component } from '@angular/core';

@Component({
  selector: 'sticky-footer',
  templateUrl: './footer.component.html',
  styles: [`
    html {
      position: relative;
      min-height: 100%;
    }
    body {
      /* Margin bottom by footer height */
      margin-bottom: 60px;
    }
    .footer {
      position: absolute;
      bottom: 0;
      width: 100%;
      /* Set the fixed height of the footer here */
      height: 60px;
      line-height: 60px; /* Vertically center the text there */
      background-color: #f5f5f5;
    }
  `]
})
export class FooterComponent{}