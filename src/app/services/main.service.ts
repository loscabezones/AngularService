import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {

  conversation:Array<string> = [];

  constructor() { }

  getConversation(){
    return this.conversation;
  }


  
}
