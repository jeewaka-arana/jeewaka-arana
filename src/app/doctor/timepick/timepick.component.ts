import { Component, OnInit } from '@angular/core';
import { IgxTimePickerComponent } from "igniteui-angular";
import { FormArray, FormControl, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-timepick',
  templateUrl: './timepick.component.html',
  styleUrls: ['./timepick.component.scss']
})
export class TimepickComponent implements OnInit {

myForm;
emails=["dscdijijdic@gmail.com","ddscdcsd@gmail.com","fcdbuhuhcd@gmail.com","dcfcdfcd@gmail.com"];
  constructor( private fb: FormBuilder) { 
    this.myForm = this.fb.group({
      useremail: this.fb.array([])
    });
  }

  ngOnInit() {
  }

 
onChange(day:string, isChecked: boolean) {
  const dayFormArray = <FormArray>this.myForm.controls.weekday;

  if(isChecked) {
    dayFormArray.push(new FormControl(day));
  } else {
    let index = dayFormArray.controls.findIndex(x => x.value == day)
    dayFormArray.removeAt(index);
  }

  console.log(dayFormArray.value);
}
}
