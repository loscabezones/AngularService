import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/services/main.service';

@Component({
  selector: 'app-autochatoutput',
  templateUrl: './autochatoutput.component.html',
  styleUrls: ['./autochatoutput.component.scss']
})
export class AutochatoutputComponent implements OnInit {
  
  conversation:Array<string> = [];


  constructor( private mainService: MainService) {
    //guardamos el valor que devuelve getConversation en nuestro array//
      this.conversation = this.mainService.getConversation();
   }

  ngOnInit() {
  }

}
