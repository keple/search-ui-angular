import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  menuList: Array<string>;


  constructor() {
    this.menuList = this.getMenuList();
  }

  ngOnInit(): void {
  }
  getMenuList(): Array<string> {
    return ['test' , 'test1'];
  }
}
