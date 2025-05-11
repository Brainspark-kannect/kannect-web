import { Component } from '@angular/core';

@Component({
    selector: 'app-journal',
    templateUrl: './journal.component.html',
    styleUrl: './journal.component.scss',
})
export class JournalComponent {
    recentEntries = [
        { topic: 'Team feedback reflection', date: '10 May, 2025' },
        { topic: 'Weekly progress summary', date: '10 May, 2025' },
        { topic: 'Career growth plan', date: '10 May, 2025' },
    ];

    goalsList = [
        { name: 'Complete Angular certification', completionPercent: 75, dueDate: '13 May, 2025' },
        {
            name: 'Improve team collaboration skills',
            completionPercent: 47,
            dueDate: '15 May, 2025',
        },
        { name: 'Learn GraphQL fundamentals', completionPercent: 60, dueDate: '14 May, 2025' },
    ];

    achievmentList = [
        {
            name: 'Problem Solver',
            description: 'Resolved 10 critical bugs in a sprint',
            date: '10 May, 2025',
        },
        {
            name: 'Team Player',
            description: 'Recognized for outstanding team contributions',
            date: '20 April, 2025',
        },
    ];
}
