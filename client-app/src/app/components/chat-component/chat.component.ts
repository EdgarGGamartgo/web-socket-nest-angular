import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
    public users: number = 0;
    public message: string = '';
    public messages: string[] = [];
    
    constructor(private chatService: ChatService){}

    ngOnInit(){
      this.chatService.receiveChat().subscribe((message: any) => {
        this.messages.push(message);
      });
      this.chatService.getUsers().subscribe((users: any) => {
        this.users = users;
      });
    }

    addChat(){
      this.messages.push(this.message);
      this.chatService.sendChat(this.message);
      this.message = '';
    }
    
  }