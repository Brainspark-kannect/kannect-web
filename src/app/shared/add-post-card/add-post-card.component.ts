import { Component, Input } from '@angular/core';
import { CardConfig } from './add.post-card.model';

@Component({
    selector: 'app-add-post-card',
    templateUrl: './add-post-card.component.html',
    styleUrl: './add-post-card.component.scss',
})
export class AddPostCardComponent {
    @Input() cardConfig: CardConfig = {};

    messages: any[] = [];
    message: string = '';
    private messageIndex = 0;
    private intervalId: any;

    ngOnInit(): void {
        this.messages = this.cardConfig?.subtitle || [];
        this.message = this.messages[this.messageIndex];
        this.intervalId = setInterval(() => {
            this.messageIndex = (this.messageIndex + 1) % this.messages.length;
            this.message = this.messages[this.messageIndex];
        }, 2000); // change message every 5 seconds
    }

    ngOnDestroy(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
        }
    }
}
