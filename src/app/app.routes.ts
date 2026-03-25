import { Routes } from '@angular/router';
import { About } from './about/about';
import { Product } from './product/product';
import { LifeCycle } from './life-cycle/life-cycle';
import { User } from './user/user';


export const routes: Routes = [
    {
        path: 'about',
        component: About
    },
    {
        path: 'product',
        component: Product
    },
    {
        path: 'life-cycle',
        component: LifeCycle
    },
    {
        path: 'user/:id',
        component: User
    }
];
