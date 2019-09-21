import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Demo1Component } from "./demo1/demo1.component";
import { RouterModule, Routes } from "@angular/router";
import { TableModule, QueryTabsModule } from "@pixelmon/pikachu";
import { NgZorroAntdModule } from "ng-zorro-antd";
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from "@angular/forms";

const routes: Routes = [
  {
    path: "demo1",
    component: Demo1Component,
    data: { title: "demo1", reuse: true }
  },
  {
    path: "demo2",
    component: Demo1Component,
    data: { title: "demo2", reuse: true }
  },
  {
    path: "demo3",
    component: Demo1Component,
    data: { title: "demo3", reuse: true }
  },
  { path: "", redirectTo: "demo1", pathMatch: "full" }
];

@NgModule({
  declarations: [Demo1Component],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    TableModule,
    QueryTabsModule,
    NgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class DemoModule {}
