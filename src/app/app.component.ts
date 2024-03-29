import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'redesprou-phone-input';
  telephone = '';
  form: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.form = this.fb.group({
      //telephone: ['+162993718452'],
      telephone: [null],        
    });
  }



  printTelephone(event) {
    this.telephone = event;
  }
}
