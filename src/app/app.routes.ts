import { Routes } from '@angular/router';

export const routes: Routes = [
    {

        path:'products',
        loadChildren: ()=>
            import('./products/features/product-shell/product.route')
    },
    {
        path:'**',
        redirectTo: 'products',
    }
];
