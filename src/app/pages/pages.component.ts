import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MENU_KEYS } from '../app.constants';
import { PageService } from './pages.service';

@Component({
    selector: 'app-pages',
    templateUrl: './pages.component.html',
    styleUrl: './pages.component.scss',
})
export class PagesComponent {
    toolbarMenuConfig: any[] = [
        {
            menuName: 'Home',
            iconName: 'home',
            label: 'Home',
            routerLink: 'pages/home',
            isSelected: true,
        },
        {
            menuName: 'Forum & Discussion',
            iconName: 'forum',
            label: 'Forum & Discussion',
            routerLink: 'pages/connect',
            isSelected: false,
        },
        {
            menuName: 'Events',
            iconName: 'event',
            label: 'Events',
            routerLink: 'pages/events',
            isSelected: false,
            // tooltipText: 'Home',
        },
        {
            menuName: 'My Journal',
            iconName: 'assignment_ind',
            label: 'My Journal',
            routerLink: 'pages/journal',
            isSelected: false,
            // tooltipText: 'Home',
        },
        {
            menuName: 'HR Dashboard',
            iconName: 'dashboard',
            label: 'HR Dashboard',
            routerLink: 'pages/dashboard',
            isSelected: false,
            // tooltipText: 'Home',
        },
    ];

    sidebarConfig: any[] = [
        {
            menuName: 'Home',
            iconName: 'home',
            label: 'Home',
            showExpansion: false,
            routerLink: 'pages/home',
            isSelected: true,
            tooltipText: 'Home',
        },
        {
            menuName: 'Help Sharing',
            iconName: 'help_outline',
            label: 'Help Sharing',
            showExpansion: false,
            routerLink: '',
            isSelected: true,
            tooltipText: 'Help Sharing',
        },
        {
            menuName: 'Forums & Discussion',
            iconName: 'forum',
            label: 'Forums & Discussion',
            showExpansion: false,
            routerLink: '',
            isSelected: true,
            tooltipText: 'Forums & Discussion',
        },
        {
            menuName: 'Events',
            iconName: 'event',
            label: 'Events',
            showExpansion: false,
            routerLink: '',
            isSelected: true,
            tooltipText: 'Events',
        },
    ];
    isExpanded: boolean = false;

    subscription: Subscription[] = [];

    constructor(
        private pageService: PageService,
        private router: Router
    ) {
        this.subscription?.push(
            this.pageService?.getIsSidenavExpanded()?.subscribe((isOpen: boolean) => {
                this.isExpanded = isOpen;
            }),
            this.pageService?.getMenu()?.subscribe((menu: any) => {
                if (menu?.queryParams) {
                    this.onSideMenuItemClick(
                        menu?.name,
                        menu?.routerLink,
                        menu?.showExpansion,
                        menu?.queryParams
                    );
                } else {
                    this.onSideMenuItemClick(menu?.name, menu?.routerLink);
                }
            })
        );
    }

    ngOnInit() {
        this.checkMenuSelected();
    }

    expandSidenav() {
        this.pageService?.setIsSidenavExpanded(!this.isExpanded);
    }

    onSideMenuItemClick(
        name: any,
        routerLink: any,
        showExpansion?: boolean,
        queryParams?: any,
        isSubMenuSelected: boolean = false
    ) {
        // If menu has submenues then it will expand menu
        if (showExpansion && !isSubMenuSelected) {
            this.sidebarConfig?.filter((data: any) => {
                if (data?.label === name) {
                    this.isExpanded = true;
                    data.isExpanded = true;
                    this.pageService?.setIsSidenavExpanded(true);
                }
            });
        } else {
            // Iterate the menu items.
            this.sidebarConfig?.filter((data: any) => {
                // Change flag of selected menu item to 'true'.
                if (data?.label === name) {
                    data.isSelected = true;
                    // Set selected submenu
                    if (data?.subMenu) {
                        data?.subMenu?.filter((sMenu: any) => {
                            if (sMenu?.routerLink === routerLink) {
                                sMenu.isSelected = true;
                                this.pageService?.setIsSidenavExpanded(false);
                                sessionStorage?.setItem(
                                    MENU_KEYS.SELECTED_SUBMENU,
                                    sMenu?.name ?? sMenu?.name
                                );
                            } else {
                                sMenu.isSelected = false;
                            }
                        });
                    } else sessionStorage?.removeItem(MENU_KEYS?.SELECTED_SUBMENU);
                    if (this.isExpanded) {
                        this.pageService?.setIsSidenavExpanded(false);
                    }
                    // Add name of menu item selected in the session storage.
                    sessionStorage?.setItem(MENU_KEYS.SELECTED_MENU, name);
                    this.router?.navigateByUrl(routerLink);
                    // do routing here
                    // this.selectedNavMenuRoute?.emit({
                    //     routerLink: routerLink,
                    //     queryParams: queryParams,
                    // });
                } else {
                    // If menu item is not selected then change flag to 'false'.
                    data.isSelected = false;
                    data.isExpanded = false;
                }
            });
        }
    }

    checkMenuSelected(): void {
        // Check if name of menu item selected is present in the session storage.
        let menuItem = sessionStorage?.getItem(MENU_KEYS.SELECTED_MENU) ?? '';
        // If name of menu item selected is present in the session storage.
        if (menuItem) {
            // Iterate the menu items.
            this.sidebarConfig?.filter((data: any) => {
                // Change flag of selected menu item to 'true'.
                if (data?.label === menuItem) {
                    this.router.navigateByUrl(data?.routerLink);
                    data.isSelected = true;
                    // Set selected submenu to session storage
                    if (data?.subMenu) {
                        let subMenu = sessionStorage?.getItem(MENU_KEYS.SELECTED_SUBMENU) ?? '';
                        if (subMenu) {
                            const submenuIndex = data?.subMenu?.findIndex((item: any) => {
                                const itemValue = item?.name || item?.name;
                                return itemValue === subMenu;
                            });
                            if (submenuIndex !== -1) {
                                data.subMenu[submenuIndex].isSelected = true;
                                this.router?.navigateByUrl(data?.subMenu[submenuIndex]?.routerLink);
                                // do routing here
                                // this.selectedNavMenuRoute?.emit({
                                //     routerLink: data?.subMenu[submenuIndex]?.routerLink,
                                //     queryParams: {},
                                // });
                            }
                            data.isExpanded = true;
                        }
                    }
                } else {
                    // If menu item is not selected then change flag to 'false'.
                    data.isSelected = false;
                }
            });
        } else {
            this.router.navigateByUrl('pages/home');
        }
    }

    onToolbarMenuItemClick(buttonLabel: string) {
        this.toolbarMenuConfig?.forEach((menu: any) => {
            if (menu?.label === buttonLabel) {
                menu.isSelected = true;
                this.router.navigateByUrl(menu?.routerLink);
            } else {
                menu.isSelected = false;
            }
        });
    }

    ngOnDestroy(): void {
        // Remove the selected menu name from the session storage.
        // sessionStorage?.removeItem(MENU_KEYS?.SELECTED_MENU);
        // sessionStorage?.removeItem(MENU_KEYS?.SELECTED_SUBMENU);
        this.subscription?.forEach((subscription) => subscription?.unsubscribe());
    }
}
