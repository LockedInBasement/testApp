import { Routes } from '@angular/router';
import { Category } from './category/category';
import { Todo } from './todo/todo';

export const routes: Routes = [
    {path:'', component:Category},
    {path:'todo', component:Todo}
];
