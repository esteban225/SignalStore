import { Routes } from "@angular/router";

export default [
    { path: '', loadComponent: () => import('../product-list/product-list.component') }
] as Routes;