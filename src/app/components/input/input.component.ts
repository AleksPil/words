import { Component } from '@angular/core';
import { ButtonIconComponent } from '../button-icon/button-icon.component';
import { FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { MatIcon } from '@angular/material/icon';
import { MatFabButton } from '@angular/material/button';
import { WordsData } from '@models/*';

@Component({
  selector: 'app-input',
  imports: [
    ButtonIconComponent,
    ReactiveFormsModule,
    MatIcon,
    MatFabButton
  ],
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent {
  public myForm : FormGroup = new FormGroup({});

 constructor() {
   this.myForm = new FormGroup({
     "upData": new FormControl("", [
       Validators.required,
       Validators.pattern("^[A-Za-zА-Яа-я, ]+$")
     ]),
   })
 }

  submit() {
    let preparedValueString: string = this.myForm.controls['upData'].value;
    if (preparedValueString.length && preparedValueString.length > 1) {
      preparedValueString = preparedValueString.toUpperCase().toLowerCase()

      let stringWordsArr: string[] = preparedValueString.split(/[ ,]+/);

      const uniqueValues: Set<string> = new Set(stringWordsArr);
      stringWordsArr = [...uniqueValues];
      console.log('submit', stringWordsArr);

    }
    this.myForm.controls['upData'].setValue('');
    this.myForm.reset()
  }


}

