import { Component } from '@angular/core';
import {TitleService} from './services/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'jsonAngular';

  public userIsLogged: boolean = true;

  usermenu: Object[] = [
    {
      title: 'Manage Account',
      route: '/manageAccount',
      icon: 'tune',
    }
  ];


  constructor(public titleService: TitleService){

  }



}
