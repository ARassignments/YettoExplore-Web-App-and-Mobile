import { Routes } from '@angular/router';
import { Home } from './home/home';
import { About } from './about/about';
import { Contact } from './contact/contact';
import { App } from './app';

export const routes: Routes = [
    {path:"",component:Home},
    {path:"home",component:Home},
    {path:"about",component:About},
    {path:"contact",component:Contact},
];
