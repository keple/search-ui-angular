import { Component, OnInit } from '@angular/core';

import {CommonService} from '../../services/abstract/CommonService';
import {MenuDto} from '../../model/menuDto';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  menuList: Array<MenuDto>;
  constructor(private commonService: CommonService) {
    this.menuList = commonService.getMenuList();
  }

  ngOnInit(): void {
    console.log('nav init!');
  }

}
