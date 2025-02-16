import { Component } from '@angular/core';
import { LogoComponent } from '@components';

@Component({
  selector: 'app-header',
  imports: [
    LogoComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

}
