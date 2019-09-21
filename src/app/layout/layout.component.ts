import { Component, OnInit } from "@angular/core";
import { MenuService, Menu } from "../core/services/menu.service";

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.less"]
})
export class LayoutComponent implements OnInit {
  searchValue = null;

  constructor(public menusSrv: MenuService) {}

  ngOnInit() {}

  /**
   * 头部菜单改变回调
   * @param target 已选的头部菜单
   */
  menuChange(target: Menu) {
    this.menusSrv.menus.forEach(menu => (menu.selected = menu === target));
  }
}
