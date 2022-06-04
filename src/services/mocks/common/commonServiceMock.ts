import {CommonService} from '../../abstract/CommonService';
import {Injectable} from '@angular/core';
import {MenuDto} from '../../../model/menuDto';

@Injectable({
  providedIn : 'root'
})
export class CommonServiceMock implements CommonService {
  getMenuList(): Array<MenuDto> {
    return [
      new MenuDto('DashBoard' , '/dashBoard'),
      new MenuDto('Search', '/search') ,
      new MenuDto('Files', '/files')
    ];
  }

}
