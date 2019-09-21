import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LayoutComponent } from "./layout.component";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { RouterModule, RouteReuseStrategy } from "@angular/router";
import {
  ReuseTabStrategy,
  ReuseTabService,
  ReuseTabModule
} from "@pixelmon/pikachu";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [LayoutComponent],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    RouterModule,
    ReuseTabModule,
    FormsModule
  ],
  providers: [
    {
      provide: RouteReuseStrategy,
      useClass: ReuseTabStrategy,
      deps: [ReuseTabService]
    }
  ]
})
export class LayoutModule {}
