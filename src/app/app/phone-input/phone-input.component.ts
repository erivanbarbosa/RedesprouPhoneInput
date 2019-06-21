import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  public openList = false;

  constructor() { }

  ngOnInit() {
  }

  toggleList() {
    this.openList = !this.openList;
  }

}
