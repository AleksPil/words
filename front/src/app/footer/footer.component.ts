import { Component } from '@angular/core';
import {LogoComponent} from '@components';

@Component({
  selector: 'app-footer',
  imports: [
    LogoComponent
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {

}
