import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-autochatwithservice',
  templateUrl: './autochatwithservice.component.html',
  styleUrls: ['./autochatwithservice.component.scss']
})
export class AutochatwithserviceComponent implements OnInit {

  conversation:Array<string> = [];
  defaultText:string = 'Mensaje';
  model = { message: ''};

  constructor() { }

  ngOnInit() {}

  onSubmit() {

    let text = this.model.message

    //Guardamos el mensaje introducido en un array para mostrarlo en el chat
    if(text.length >0){
      this.conversation.push(text);
    }
    console.log(this.conversation);

    //eliminamos el texto introducido en el input text//
    //eliminamos el valor del placeHolder
    this.model.message = '';
    this.defaultText = '';

  }

}
