import { MenuItem } from "primeng/api";
import { OnInit } from "@angular/core";

export class MenuItems {
    static items: MenuItem[] = [
            {label: 'Home', routerLink: ""},
            {label: 'Cities', routerLink: "cities"}
    ];
}
