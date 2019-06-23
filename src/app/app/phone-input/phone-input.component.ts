import { Component, OnInit, HostListener, ElementRef, Output, EventEmitter, forwardRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { TelephoneUtils } from '../TelephoneUtils';
import { CountryCodeData } from '../CountryCodeData';
const noop = () => { };

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css'],
  providers: [{provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => PhoneInputComponent), multi: true }]
})

export class PhoneInputComponent implements OnInit, ControlValueAccessor {
  public openList = false;
  form: FormGroup;
  telephoneUtils: TelephoneUtils

  private onTouchedCallback: () => void = noop;
  private onChangeCallback: (_: any) => void = noop;
  disabled: boolean;

  writeValue(value: any) {
    if(value) {
      const countryData: CountryCodeData = this.telephoneUtils.getCountryCodeData(value); 
      this.form.get('fullTelephone').setValue(value);
      this.form.get('countryCode').setValue(countryData.code);
      this.form.get('telephone').setValue(value);
      this.form.get('flag').setValue(countryData.iso2.toLowerCase());
      this.onChangeCallback(this.form.get('fullTelephone').value);
    } 
  }

  registerOnChange(fn: any) {
    this.onChangeCallback = fn;
  }

  registerOnTouched(fn: any) {
    this.onTouchedCallback = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled; 
  }

  constructor(private fb: FormBuilder,
    private eRef: ElementRef ) { 
      this.telephoneUtils = new TelephoneUtils();
    }

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
      fullTelephone: [null, Validators.required],
      flag: ['br', Validators.required],
    });
  }

  toggleList() {
    this.openList = !this.openList;
  }

  changeCountryCode(code, flag) {
    this.form.get('countryCode').setValue(code);
    this.form.get('flag').setValue(flag);
    this.toggleList();
  }

  getCountryFlag(): string {
    return 'flag-icon-' + this.form.get('flag').value; 
  }

  telephoneChanged(): void {
    if(this.form.valid) {
      const code = this.form.get('countryCode').value;
      const phone = this.form.get('telephone').value
      this.form.get('fullTelephone').setValue(code + phone);
      this.onChangeCallback(this.form.get('fullTelephone').value);
    }
  }
}
