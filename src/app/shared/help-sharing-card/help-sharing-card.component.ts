import { Component, Input } from '@angular/core';
import { HelpSharingCardConfig } from './help-sharing-card.model';

@Component({
    selector: 'app-help-sharing-card',
    templateUrl: './help-sharing-card.component.html',
    styleUrl: './help-sharing-card.component.scss',
})
export class HelpSharingCardComponent {
    @Input() set cardConfig(config: HelpSharingCardConfig) {
        this._cardConfig = { ...config };
        this._cardConfig.showFullText = false;
    }

    get cardConfig() {
        return this._cardConfig;
    }

    _cardConfig: any;

    toggleText(): void {
        this.cardConfig.showFullText = !this.cardConfig?.showFullText;
    }
}
