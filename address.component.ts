import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit {
  items = [];

  constructor() { }

  ngOnInit() {
  }
  saveForm(form: NgForm) {
    console.log(form.value);
    
  }
addform(){
  this.items.push(this.items.length);
}
}