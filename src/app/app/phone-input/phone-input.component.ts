import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  public openList = false;
  countryCode = '+55';
  form: FormGroup;

  constructor(private fb: FormBuilder,) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      countryCode: '+55'
    });
}

  toggleList() {
    this.openList = !this.openList;
  }

}
