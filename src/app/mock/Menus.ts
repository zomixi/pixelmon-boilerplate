import { Menu } from "../core/services/menu.service";

export const Menus: Menu[] = [
  {
    level: 1,
    title: "Group 1",
    selected: true,
    icon: "mail",
    children: [
      {
        level: 2,
        title: "Group 1 - demo",
        icon: "bars",
        children: [
          {
            level: 3,
            title: "/demo/demo1",
            routerLink: "/demo/demo1"
          },
          {
            level: 3,
            title: "/demo/demo2",
            routerLink: "/demo/demo2"
          }
        ]
      }
    ]
  },
  {
    level: 1,
    title: "Group 2",
    icon: "team",
    children: [
      {
        level: 2,
        title: "Group 2 - demo",
        icon: "user",
        children: [
          {
            level: 3,
            title: "/demo/demo3",
            routerLink: "/demo/demo3"
          }
        ]
      }
    ]
  }
];
