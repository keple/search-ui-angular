import {Injectable} from '@angular/core';
import {CommonService} from '../../abstract/CommonService';

@Injectable({
  providedIn : 'root'
})
export class CommonServiceImpl implements CommonService{
  constructor() {
  }

  getMenuList(): Array<string> {
    return undefined;
  }
}
