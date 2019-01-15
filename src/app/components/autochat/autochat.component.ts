import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autochat',
  templateUrl: './autochat.component.html',
  styleUrls: ['./autochat.component.scss']
})
export class AutochatComponent implements OnInit {

  defaultText:string = 'Mensaje';
  model = { message: ''};

  constructor() { }

  ngOnInit() {}

  onSubmit() {
    console.log(this.model.message)
    this.model.message = '';
    this.defaultText = '';
  }
}
