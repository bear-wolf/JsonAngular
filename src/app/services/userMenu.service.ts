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
		      title: 'Home',
		      route: '/home',
		      icon: 'home',
		      leftMenu: [
						{
				      title: 'Managers',
				      route: '/security/managers',
							icon: 'settings_applications',
						},
						{
				      title: 'Clients',
				      route: '/entities/clients',
				      icon: 'assessment',
						},
            {
              title: 'Strategies',
              route: '/entities/strategies',
              icon: 'assessment',
            },
            {
              title: 'Accounts',
              route: '/entities/accounts',
              icon: 'assessment',
            }
        ]},
				{
					title: 'Managers',
					route: '/security/managers',
					icon: 'settings_applications',
					roles: ['Superuser', 'Admin']
				},
				{
					title: 'Clients',
					route: '/entities/clients',
					icon: 'assessment',
					roles: ['Reader']
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


    getTopMenu(manager: UserModel) {
			if(manager)	return this._menuItems.filter( item => this.isAccessible(item, manager));
			else return [];
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
	roles?: string[];
	count?: number;
};

export interface MenuChange{
	command: string;
	count?: number;
	navigateTo?: boolean ;
}
