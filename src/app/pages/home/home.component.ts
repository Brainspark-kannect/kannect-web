import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss',
})
export class HomeComponent {
    leaderBoardButtonConfig = [
        {
            label: 'Weekly',
            isSelected: true,
        },
        {
            label: 'Monthly',
            isSelected: false,
        },
        {
            label: 'Quarterly',
            isSelected: false,
        },
    ];
    pollQuestions: any[] = [
        {
            question: 'Which coffee do you prefer?',
            options: ['Americano', 'Latte', 'Espresso', 'Cappuccino'],
        },
        {
            question: 'Vote for Employee of the Month',
            options: ['Jack', 'Sam', 'Jolly', 'Adam'],
        },
    ];
    birthdayList: any[] = [
        {
            name: 'John Doe',
            date: '2023-10-01',
            profilePhoto: 'https://example.com/photo1.jpg',
        },
        {
            name: 'Jane Smith',
            date: '2023-10-05',
            profilePhoto: 'https://example.com/photo1.jpg',
        },
    ];

    shineOnSpin: boolean = true;

    getLeaders(buttonLabel: string) {
        this.leaderBoardButtonConfig?.forEach((button) => {
            if (button.label === buttonLabel) button.isSelected = true;
            else button.isSelected = false;
        });
    }

    submitPoll(selectedOption: string) {}
}
