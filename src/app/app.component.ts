import {Component, ViewEncapsulation} from '@angular/core';
import {TitleService} from './services/title.service';
import {MenuItem, UserMenuService} from './services/userMenu.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {
  title = 'jsonAngular';
  public routes: MenuItem[];
  public userIsLogged: boolean = true;

  constructor(public titleService: TitleService,
              public menuService: UserMenuService){

    this.titleService.setTitle('Home');

    this.routes = this.menuService.getTopMenu();
  }
}
