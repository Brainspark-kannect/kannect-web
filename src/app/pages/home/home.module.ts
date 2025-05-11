import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddPostCardModule } from '../../shared/add-post-card/add-post-card.module';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent, // Define the route directly in the module
    },
];

@NgModule({
    declarations: [HomeComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        AddPostCardModule,
        RouterModule.forChild(routes),
    ],
    exports: [HomeComponent],
})
export class HomeModule {}
