import { Component } from '@angular/core';

@Component({
    selector: 'app-connect',
    templateUrl: './connect.component.html',
    styleUrl: './connect.component.scss',
})
export class ConnectComponent {
    menuItems = [
        { key: 'help', label: 'Help Sharing' },
        { key: 'forum', label: 'Forum and Discussion' },
        { key: 'spine', label: 'Spine Shinners' },
    ];
    selectedMenu = 'help';

    selectMenu(key: string) {
        this.selectedMenu = key;
    }
    dateOptions: any = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true,
    };
    // sidebarItems = [
    //     { title: 'Help Sharing', path: '/connect' },
    //     { title: 'Forum and Discussion', path: '/connect/forum' },
    //     { title: 'Spine Shinners', path: '/connect/spine-shinners' },
    // ];

    helpPosts: any = [
        {
            id: '1',
            title: 'How to get started with Angular Material?',
            authorname: 'Dev Kumar',
            authorRole: 'Frontend Developer',
            content: `I'm working on a new project and need to implement Angular Material, but I'm
                    facing some issues with the setup. Can anyone provide guidance or share
                    resources? I've tried following the official documentation but I'm getting some
                    configuration errors that I don't understand.`,
            time: new Date().toLocaleString('en-US', this.dateOptions),
            upVoteCount: 12,
            downVoteCount: 2,
            commentCount: 5,
            answersCount: 6,
        },
        {
            id: '1',
            title: 'How to get started with Angular Material?',
            authorname: 'Dev Kumar',
            authorRole: 'Frontend Developer',
            content: `I'm working on a new project and need to implement Angular Material, but I'm
                    facing some issues with the setup. Can anyone provide guidance or share
                    resources? I've tried following the official documentation but I'm getting some
                    configuration errors that I don't understand. I'm working on a new project and need to implement Angular Material, but I'm
                    facing some issues with the setup. Can anyone provide guidance or share
                    resources? I've tried following the official documentation but I'm getting some
                    configuration errors that I don't understand.`,
            time: new Date().toLocaleString('en-US', this.dateOptions),
            upVoteCount: 12,
            downVoteCount: 2,
            commentCount: 5,
            answersCount: 6,
        },
        // Add more posts...
    ];

    forumPosts: any = [
        {
            id: '1',
            title: 'Tech Stack Tips: What’s One Tool You Can’t Live Without?',
            authorname: 'William Harward',
            authorRole: '.Net Developer',
            content: `Whether it’s a cool browser extension, a design tool, or a dev shortcut, tell us
             what tool boosts your daily workflow. Bonus points for links or quick tutorials!`,
            time: new Date().toLocaleString('en-US', this.dateOptions),
            upVoteCount: 12,
            hideDownvote: true,
            commentCount: 5,
            hideAnswersCount: true,
        },
        {
            id: '2',
            title: 'If You Could Learn One New Skill This Year…',
            authorname: 'Peter Farnandis',
            authorRole: 'Frontend Developer',
            content: `What’s one professional or personal skill you wish to develop in 2025? 
            et others weigh in with tips, courses, or encouragement to get you started!`,
            time: new Date().toLocaleString('en-US', this.dateOptions),
            upVoteCount: 12,
            hidedownvote: true,
            commentCount: 5,
            hideAnswersCount: true,
        },
        // Add more posts...
    ];

    spinPostList = ['This Week', 'Last Week', 'Earlier'];
    spinShinnersPost: any = {
        Earlier: [
            {
                id: '2',
                title: 'Laugh Break with Kiran',
                authorname: 'Kiran Singh',
                authorRole: 'React Developer',
                content: `Tried to mute myself during a call, ended up turning off my camera instead… twice. Safe to say I need a better headset!`,
                upVoteCount: 12,
                hideDownvote: true,
                commentCount: 5,
                hideAnswersCount: true,
            },
            {
                id: '2',
                title: 'Motivation from Saurabh',
                authorname: 'Saurabh Kale',
                authorRole: 'React Developer',
                content: `Every expert was once a beginner. Keep showing up, and growth follows.`,
                upVoteCount: 12,
                hideDownvote: true,
                commentCount: 5,
                hideAnswersCount: true,
            },
        ],
        'Last Week': [
            {
                id: '2',
                title: 'Shared by Ritu Malhotra',
                authorname: 'Ritu Malhotra',
                authorRole: 'React Developer',
                content: `My first client presentation this week was both nerve-wracking and exciting. Preparation and peer support made all the difference. Don’t underestimate the power of dry runs!`,
                upVoteCount: 12,
                hideDownvote: true,
                commentCount: 5,
                hideAnswersCount: true,
            },
            {
                id: '2',
                title: 'Process Hack by Imran',
                authorname: 'Imran Malhotra',
                authorRole: 'React Developer',
                content: `If you're juggling tasks, try the Pomodoro Technique. 25-minute sprints + short breaks = better focus and less burnout.`,
                upVoteCount: 12,
                hideDownvote: true,
                commentCount: 5,
                hideAnswersCount: true,
            },
        ],
        'This Week': [
            {
                id: '1',
                title: 'Tech Tip from Ayesha',
                authorname: 'Ayesha Sharma',
                authorRole: 'Spring Boot Developer',
                content: `Found a great shortcut in VS Code: Ctrl + P to quickly jump to files. Saves me a ton of time during development!`,
                upVoteCount: 12,
                hideDownvote: true,
                commentCount: 5,
                hideAnswersCount: true,
            },
        ],
    };

    trendingPosts = [
        { title: 'How to get started with Angular Material?', upvotes: 12, comments: 5 },
        { title: 'Best practices for state management in React', upvotes: 24, comments: 8 },
        { title: 'Optimizing CI/CD pipeline for microservices', upvotes: 18, comments: 7 },
    ];

    topContributors = [
        { name: 'Sarah Wilson', role: 'Frontend Developer' },
        { name: 'Dev Kumar', role: 'Devops Engineer' },
        { name: 'Michael Chen', role: 'Java Developer' },
    ];
}
