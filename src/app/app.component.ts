import { Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'my-first-project';
  showSecrate: boolean = true;
  buttonClickLog: any = [];

  constructor(){}

  toggleSecrateKey(){
    this.showSecrate = this.showSecrate == true ? false : true;
    this.buttonClickLog.push(Math.random());
  }
}
