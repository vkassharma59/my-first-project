import { Component, OnInit } from '@angular/core'

@Component({
  'selector': 'app-servers',
  'templateUrl': './servers.component.html'
})

export class ServersComponent implements OnInit {

  allowToAddNewSever: boolean = true;
  serverCreateStatus: string = 'No server are created!';
  serverName: string = 'TestServer';

  constructor() {
    setTimeout(() => {
      this.allowToAddNewSever = false;
    }, 2000);
  }

  ngOnInit(){}

  onServerCreate(){
    this.serverCreateStatus = 'Server is created!';
  }

  onUpdateServerName(event: Event){
    // typecast event value if we use "Event" in type instead of any.
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
