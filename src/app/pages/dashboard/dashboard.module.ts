import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddPostCardModule } from '../../shared/add-post-card/add-post-card.module';
import { DashboardComponent } from './dashboard.component';
import { MatListModule } from '@angular/material/list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';

const routes: Routes = [
    {
        path: '',
        component: DashboardComponent, // Define the route directly in the module
    },
];

@NgModule({
    declarations: [DashboardComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        AddPostCardModule,
        MatListModule,
        MatFormFieldModule,
        MatToolbarModule,
        MatSelectModule,
        MatDatepickerModule,
        RouterModule.forChild(routes),
    ],
    exports: [DashboardComponent],
})
export class DashboardModule {}
