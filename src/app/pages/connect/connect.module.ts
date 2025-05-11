import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { ConnectComponent } from './connect.component';
import { MatListModule } from '@angular/material/list';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import { AddPostCardModule } from '../../shared/add-post-card/add-post-card.module';
import { HelpSharingCardModule } from '../../shared/help-sharing-card/help-sharing-card.module';

const routes: Routes = [
    {
        path: '',
        component: ConnectComponent, // Define the route directly in the module
    },
];

@NgModule({
    declarations: [ConnectComponent],
    imports: [
        CommonModule,
        FormsModule,
        MatCardModule,
        MatDividerModule,
        MatButtonModule,
        MatIconModule,
        MatListModule,
        MatTabsModule,
        MatChipsModule,
        AddPostCardModule,
        HelpSharingCardModule,
        RouterModule.forChild(routes),
    ],
    exports: [ConnectComponent],
})
export class ConnectModule {}
