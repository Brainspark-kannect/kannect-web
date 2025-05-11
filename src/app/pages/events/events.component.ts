import { Component } from '@angular/core';

@Component({
    selector: 'app-events',
    templateUrl: './events.component.html',
    styleUrl: './events.component.scss',
})
export class EventsComponent {
    dateOptions: any = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    eventsCardConfig = [
        {
            eventType: 'Team Building',
            topic: 'Team Building Exercise',
            description:
                'Join us for a fun team building activity to improve collaboration and communication within teams.',
            venue: 'Main Conference Room',
            time: new Date().toLocaleString('en-US', this.dateOptions),
        },
        {
            eventType: 'Health',
            topic: 'Wellness Challenge Kickoff',
            description:
                'Start of our monthly wellness challenge. This month we focus on daily physical activity goals.',
            time: new Date().toLocaleString('en-US', this.dateOptions),
            venue: 'Virtual Meeting',
        },
        {
            eventType: 'Learning',
            topic: 'Tech Talk: Future of AI',
            description:
                'A discussion on the latest advancements in AI and how they impact our industry.',
            time: new Date().toLocaleString('en-US', this.dateOptions),
            venue: 'Virtual Meeting',
        },
    ];

    upcommingEvents = [
        { topic: 'Team Building Exercise', time: '15 May, 2025' },
        { topic: 'Tech Talk: Future of AI', time: '17 May, 2025' },
    ];
}
