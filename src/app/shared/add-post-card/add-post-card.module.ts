import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { AddPostCardComponent } from './add-post-card.component';

@NgModule({
    declarations: [AddPostCardComponent],
    imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule],
    exports: [AddPostCardComponent],
})
export class AddPostCardModule {}
