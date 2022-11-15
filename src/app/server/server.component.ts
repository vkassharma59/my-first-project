import { ArrayType } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  // styleUrls: ['./server.component.css']
  styles: [`
    .online {
      background: blue;
    }
  `]
})

export class ServerComponent implements OnInit {

  serverId: number = 10;
  serverStatus: string = 'offline';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'offline' : 'online';
    this.serverId = Math.random();
  }

  ngOnInit() {
  }

  getServerStatus() {
    return this.serverStatus;
  }

  getServerColor() {
    return this.serverStatus == 'offline' ? 'red' : 'green';
  }
}
