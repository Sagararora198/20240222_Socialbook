import { Routes } from '@angular/router';
import { LatestNews } from './latest-news/latest-news.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
export const routes: Routes = [
    {
        path:'latest-news',
        component: LatestNews
    },
];

