import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  public openList = false;
  countryCode = '+55';
  form: FormGroup;
  flag = 'br';
  @Output() onTelephoneChanged = new EventEmitter<string>();

  constructor(private fb: FormBuilder,
    private eRef: ElementRef ) { }

  ngOnInit() {
    this.initializeForm();
  }

  @HostListener('document:click', ['$event'])
  clickout(event) {
    if(!this.eRef.nativeElement.contains(event.target))
      this.openList = false;
  }

  initializeForm() {
    this.form = this.fb.group({
      countryCode: ['+55', Validators.required],
      telephone: [null, Validators.required],    
    });
  }

  toggleList() {
    this.openList = !this.openList;
  }

  changeCountryCode(code, flag) {
    this.form.get('countryCode').setValue(code);
    this.flag = flag;
    this.toggleList();
  }

  getCountryFlag() {
    return 'flag-icon-' + this.flag; 
  }

  telephoneChanged() {
    if(this.form.valid) {
      const code = this.form.get('countryCode').value;
      const phone = this.form.get('telephone').value
      this.onTelephoneChanged.emit( code + phone);
    }
  }



}
