import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { HelpSharingCardComponent } from './help-sharing-card.component';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
    declarations: [HelpSharingCardComponent],
    imports: [CommonModule, MatCardModule, MatIconModule, MatDividerModule],
    exports: [HelpSharingCardComponent],
})
export class HelpSharingCardModule {}
