import { Injectable } from '@angular/core';
import {Title} from '@angular/platform-browser';

@Injectable()
export class TitleService {
    constructor(private titleService: Title) { }

    private _contentTitle: string;
    private _menuTitle: string;

    getContentTitle() {
        return this._contentTitle;
    }

    setContentTitle(title: string) {
        this._contentTitle = title;
    }

    setTitle( newTitle: string) {
      this.titleService.setTitle('RAMMFX Backoffice - '+ newTitle);
    }
    getMenuTitle() {
        return this._menuTitle;
    }

    setMenuTitle(title: string) {
        this._menuTitle = title;
    }

}
