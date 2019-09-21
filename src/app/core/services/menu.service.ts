import { Injectable } from "@angular/core";
import { Menus } from "src/app/mock/Menus";
import { Subject } from "rxjs";
import { filter } from "rxjs/operators";
import { Router, NavigationEnd } from "@angular/router";

export interface Menu {
  title: string;
  level: number;
  icon?: string;
  open?: boolean;
  selected?: boolean;
  matched?: boolean;
  disabled?: boolean;
  children?: Menu[];
  parent?: Menu;
  routerLink?: string;
}

@Injectable({
  providedIn: "root"
})
export class MenuService {
  currentUrl = "";
  menus: Menu[] = [];
  isCollapsed = false;
  searchValue = "";

  constructor(private _router: Router) {
    this._router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.currentUrl = event.urlAfterRedirects || event.url;
        this.updateMenus();
      });
  }

  loadMenus() {
    // 模拟异步接口
    setTimeout(() => {
      this.menus = Menus;
      this.updateMenus();
    }, 1000);
  }

  get siderMenus() {
    const target = this.menus.find(menu => menu.selected);
    return (target && target.children) || [];
  }

  updateMenus() {
    let target: Menu = null;

    const innerFn = (nodes: Menu[], parent: Menu) => {
      nodes.forEach(node => {
        node.parent = parent;
        node.selected = false;

        if (node.routerLink === this.currentUrl) {
          target = node;
          target.selected = true;
        }

        if (node.children && node.children.length) {
          innerFn(node.children, node);
        }
      });
    };

    innerFn(this.menus || [], null);

    while (target && target.parent) {
      target = target.parent;
    }

    if (target) {
      target.selected = true;
    }
  }

  menuSearch() {
    console.log(this.searchValue);
  }

  collapse() {
    this.isCollapsed = !this.isCollapsed;

    const innerFn = (nodes: Menu[]) => {
      nodes.forEach(node => {
        node.open = false;
        if (node.children && node.children.length) {
          innerFn(node.children);
        }
      });
    };

    innerFn(this.menus || []);
  }
}
