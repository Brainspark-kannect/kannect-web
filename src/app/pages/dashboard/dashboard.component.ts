import { Component } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrl: './dashboard.component.scss',
})
export class DashboardComponent {
    menuItems = [
        { key: 'tasks', label: 'Tasks' },
        { key: 'events', label: 'Events' },
        { key: 'posts', label: 'Posts' },
        { key: 'spinWheel', label: 'Shine Spin' },
        { key: 'polls', label: 'Polls' },
        { key: 'games', label: 'Games' },
    ];
    selectedMenu = 'tasks';
    selectedMenuName = 'Tasks';

    selectMenu(key: string, name: string) {
        this.selectedMenu = key;
        this.selectedMenuName = name;
    }

    employeesList = [
        { name: 'Jack', isSelected: false },
        { name: 'James', isSelected: false },
        { name: 'William', isSelected: false },
        { name: 'July', isSelected: false },
    ];
}
