import { Injectable } from '@angular/core';
import { UserModel }  from '../models/user';
import {Subject} from 'rxjs';

@Injectable()
export class UserMenuService {
    constructor() { }

    private _contentTitle: string;
    private _menuTitle: string;

	private componentMenuItemChangedSource = new Subject<MenuChange>();
	public componentMenuItemChanged$ = this.componentMenuItemChangedSource.asObservable();
		
    announceMenuItemChange(menuChange: MenuChange) {
        this.componentMenuItemChangedSource.next(menuChange);
    }

    private _menuItems: MenuItem[] = <MenuItem[]>[
		    {
		      title: 'Users',
		      route: '/users',
		      icon: 'home'
        },
				{
					title: 'Countries',
					route: '/countries',
					icon: 'settings_applications'
				},
				{
					title: 'User Countries',
					route: '/users-countries',
					icon: 'assessment'
				},

		  ];

	private _componentMenuItems: MenuItem[] = <MenuItem[]>[
    {
      title: 'Accounts',
      route: 'accounts',
      icon: 'home',
      leftMenu: [
        {
          title: 'Account Details',
          command: '/account.show-info',
          icon: 'account_box',
        }
      ]
    },
  ];


    getTopMenu() {
			return this._menuItems;
    }

    getLeftSideMenu(topMenu: string, manager: UserModel) {
			let menu = this._menuItems.filter( item => item.route == topMenu).filter( item => this.isAccessible(item, manager)).map( i=> {return i.leftMenu;})[0];
			if (menu) return menu;
			else {
				let nodes: string[] = topMenu.split('/');
				nodes.pop();
				topMenu = nodes.join('/');
				menu = this._menuItems.filter( item => item.route == topMenu).filter( item => this.isAccessible(item, manager)).map( i=> {return i.leftMenu;})[0];
					return menu;
			}
		}

		getComponentMenu(menu: string): MenuItem[]{
		  return this._componentMenuItems.filter( item => item.route == menu).map( i=> {return i.leftMenu;})[0];
		}

		public isAccessible(item: MenuItem, user: UserModel): boolean {
			// if (item.roles && item.roles.length > 0 && user && user.Roles){
			// 	return item.roles.filter((r) => user.Roles.includes(r)).length > 0;
			// }
			return true; 
		}
}

export interface MenuItem {
  title: string;
	route?: string;
	command?: string;
  icon: string;
	leftMenu: MenuItem[];
	showMenuForRoute?: string;
};

export interface MenuChange{
	command: string;
	count?: number;
	navigateTo?: boolean ;
}
