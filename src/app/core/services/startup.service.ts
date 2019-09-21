import { Injectable, Injector } from "@angular/core";
import { MenuService } from "./menu.service";
@Injectable({
  providedIn: "root"
})
export class StartupService {
  constructor(private _injector: Injector) {}

  load(): void {
    this._injector.get(MenuService).loadMenus();
  }
}

export function StartupServiceFactory(startupService: StartupService) {
  return () => startupService.load();
}
