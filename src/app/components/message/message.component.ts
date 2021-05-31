import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css'],
})
export class MessageComponent implements OnInit {
  messageObject: any = {
    status: '',
    message: '',
    color: '',
  };

  constructor() {}

  ngOnInit(): void {
    this.message(this.messageObject);
  }

  message(data: { status: any; message: any }) {
    this.messageObject.status = data.status;

    switch (data.status) {
      case false:
        this.messageObject.color = 'warning';
        break;
      default:
        this.messageObject.color = 'success';
    }

    this.messageObject.message = data.message;
  }
}
