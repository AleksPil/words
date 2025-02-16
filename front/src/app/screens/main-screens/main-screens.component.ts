import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  InputComponent,
  SelectComponent,
  ControlModesComponent,
  SelectedButtonComponent,
  TileComponent,
  GroupTilesComponent} from '@components';
import {InfoObj, WordsData} from '@models/*';
import {KeyValuePipe} from '@angular/common';


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
    KeyValuePipe,
  ],
  templateUrl: './main-screens.component.html',
  styleUrl: './main-screens.component.css'
})
export class MainScreensComponent {
  public tileOrGroupTiles: boolean = false;
  public wordsData: WordsData = {
    ua: [
      {
        originalWord: 'Book',
        translationWord: 'Книга',
        selectedWord: false
      },
      {
        originalWord: 'House',
        translationWord: 'Дім',
        selectedWord: true
      },
      {
        originalWord: 'Sun',
        translationWord: 'Сонце',
        selectedWord: false
      },
      {
        originalWord: 'Flower',
        translationWord: 'Квітка',
        selectedWord: false
      },
      {
        originalWord: 'Water',
        translationWord: 'Вода',
        selectedWord: false
      },
      {
        originalWord: 'City',
        translationWord: 'Місто',
        selectedWord: false
      },
      {
        originalWord: 'Wind',
        translationWord: 'Вітер',
        selectedWord: false
      },
      {
        originalWord: 'Family',
        translationWord: 'Родина',
        selectedWord: false
      },
      {
        originalWord: 'Tree',
        translationWord: 'Дерево',
        selectedWord: false
      },
      {
        originalWord: 'Sea',
        translationWord: 'Море',
        selectedWord: false
      },
      {
        originalWord: 'Mountains',
        translationWord: 'Гори',
        selectedWord: false
      },
      {
        originalWord: 'Friends',
        translationWord: 'Друзі',
        selectedWord: false
      },
      {
        originalWord: 'Bird',
        translationWord: 'Птах',
        selectedWord: false
      },
      {
        originalWord: 'Snow',
        translationWord: 'Сніг',
        selectedWord: false
      },
      {
        originalWord: 'School',
        translationWord: 'Школа',
        selectedWord: true
      },
      {
        originalWord: 'Time',
        translationWord: 'Час',
        selectedWord: false
      },
      {
        originalWord: 'Dream',
        translationWord: 'Мрія',
        selectedWord: false
      },
      {
        originalWord: 'Music',
        translationWord: 'Музика',
        selectedWord: true
      }
    ],
    en: [],
    de: []
  };
}
