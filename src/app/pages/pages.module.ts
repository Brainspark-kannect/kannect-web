import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatExpansionModule } from '@angular/material/expansion';

const routes: Routes = [
    {
        path: '',
        component: PagesComponent,
        children: [
            {
                path: '',
                redirectTo: 'home',
                pathMatch: 'full',
            },
            {
                loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
                path: 'home',
            },
            {
                loadChildren: () => import('./connect/connect.module').then((m) => m.ConnectModule),
                path: 'connect',
            },
            {
                loadChildren: () => import('./events/events.module').then((m) => m.EventsModule),
                path: 'events',
            },
            {
                loadChildren: () => import('./journal/journal.module').then((m) => m.JournalModule),
                path: 'journal',
            },
            {
                loadChildren: () =>
                    import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
                path: 'dashboard',
            },
        ],
    },
];

@NgModule({
    declarations: [PagesComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatToolbarModule,
        MatButtonModule,
        MatSidenavModule,
        MatIconModule,
        MatTooltipModule,
        MatExpansionModule,
        RouterModule.forChild(routes),
    ],
    exports: [PagesComponent],
})
export class PagesModule {}
