import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddPostCardModule } from '../../shared/add-post-card/add-post-card.module';
import { JournalComponent } from './journal.component';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const routes: Routes = [
    {
        path: '',
        component: JournalComponent, // Define the route directly in the module
    },
];

@NgModule({
    declarations: [JournalComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        AddPostCardModule,
        MatProgressBarModule,
        RouterModule.forChild(routes),
    ],
    exports: [JournalComponent],
})
export class JournalModule {}
