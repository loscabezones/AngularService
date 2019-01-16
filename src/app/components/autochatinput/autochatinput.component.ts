import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-autochatinput',
  templateUrl: './autochatinput.component.html',
  styleUrls: ['./autochatinput.component.scss']
})
export class AutochatinputComponent implements OnInit {

  conversation:Array<string> = [];
  defaultText:string = 'Mensaje';
  model = { message: ''};

  constructor( private mainService : MainService) {
      // guardamos el valor que devueve getConversation en nuestro array
        this.conversation = this.mainService.getConversation();
   }

  ngOnInit() {
  }

  onSubmit() {

    let text = this.model.message

    //Guardamos el mensaje introducido en el array
    if(text.length >0){
      this.conversation.push(text);
    }

    //eliminamos el texto introducido en el input text//
    //eliminamos el valor del placeHolder
    this.model.message = '';
    this.defaultText = '';

  }

}
