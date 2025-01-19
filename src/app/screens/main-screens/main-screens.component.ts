import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InputComponent } from '../../components/input/input.component';
import {SelectComponent} from '../../components/select/select.component';
import {ControlModesComponent} from '../../components/control-modes/control-modes.component';
import {SelectedButtonComponent} from '../../components/selected-button/selected-button.component';
import {TileComponent} from '../../components/tile/tile.component';
import {GroupTilesComponent} from '../../components/group-tiles/group-tiles.component';


@Component({
  selector: 'app-main-screens',
  imports: [
    MatFormFieldModule,
    MatInputModule,
    InputComponent,
    SelectComponent,
    ControlModesComponent,
    SelectedButtonComponent,
    TileComponent,
    GroupTilesComponent,
  ],
  templateUrl: './main-screens.component.html',
  styleUrl: './main-screens.component.css'
})
export class MainScreensComponent {
  public tileOrGroupTiles: boolean = false;
}
