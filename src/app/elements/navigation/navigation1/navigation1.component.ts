
import { Component, } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { Location, PlatformLocation, CommonModule, NgClass } from '@angular/common';

interface MenuItem {
  title: string;
  route?: string;
  subMenu?: {
    title: string;
    route?: string;
    subsubMenu?: { title: string; route: string; }[]
  }[];
}

@Component({
  selector: 'app-navigation1',
  standalone: true,
  imports: [
    RouterLink,
    CommonModule,
    NgClass
  ],
  templateUrl: './navigation1.component.html',
  styleUrl: './navigation1.component.css'
})
export class Navigation1Component {

  activeMenu: string = "";
  activeSubMenu: string = "";
  activeSubSubMenu: string = "";
  toggleMenu: string = '';
  toggleSubMenu: string = '';
  currentHref: string = "";

  constructor(private router: Router, private location: Location, private backLocation: PlatformLocation) {
    router.events.subscribe((val) => {
      if (location.path() != '') {
        this.currentHref = location.path();
      } else {
        this.currentHref = '/index-1'
      }
    });
    backLocation.onPopState(() => {   // back click get url
      this.handleActiveMenu(window.location.pathname);
    });
  }

  ngOnInit(): void {
    this.handleActiveMenu(this.currentHref);
  }

  handleActiveMenu(val: any) {
    this.sidebarMenu.map((data: any, ind: any) => {
      if (data.route == val) {
        this.activeMenu = data.title;
      }
      data.subMenu?.map((item: any, ind: any) => {
        if (item.route == val) {
          this.activeMenu = data.title;
          this.activeSubMenu = item.title;
          this.activeSubSubMenu = "";
        }
        item.subsubMenu?.map((item1: any, ind: any) => {
          if (item1.route == val) {
            this.activeMenu = data.title;
            this.activeSubMenu = item.title;
            this.activeSubSubMenu = item1.title
          }
        })
      })
    });
  }

  opneMenu(item: any) {
    if (this.toggleMenu != item.toString()) {
      this.toggleMenu = item.toString();
    } else {
      this.toggleMenu = ' ';
    }
  }

  opneSubMenu(item: any) {
    console.log('get', item)
    if (this.toggleSubMenu != item.toString()) {
      this.toggleSubMenu = item.toString();
    } else {
      this.toggleSubMenu = ' ';
    }
  }

  sidebarMenu: MenuItem[] = [
    {
      title: 'Home',
      subMenu: [
        {
          title: 'Home 1',
          route: '/index-1'
        },
        {
          title: 'Home 2',
          route: '/index-2'
        },
        {
          title: 'Home 3',
          route: '/index-3'
        }

      ]
    },
    {
      title: 'Pages',
      subMenu: [
        {
          title: 'About Us',
          route: '/about-us'
        },
        {
          title: 'Volunteer',
          subsubMenu: [
            {
              title: 'Volunteer',
              route: '/volunteer'
            },
            {
              title: 'Become A Volunteer',
              route: '/become-a-volunteer'
            }
          ]
        },
        {
          title: 'Faq',
          route: '/faq'
        },
        {
          title: 'Certificates',
          route: '/certificates'
        },
        {
          title: 'Ask A Question',
          route: '/ask-a-question'
        },
        {
          title: 'Happy Clients',
          route: '/happy-clients'
        },
        {
          title: 'How It Works',
          route: '/how-it-works'
        },
        {
          title: 'Mission',
          route: '/mission'
        },
        {
          title: 'Terms And Condition',
          route: '/terms-and-condition'
        },
        {
          title: 'Coming Soon',
          route: '/coming-soon'
        },
        {
          title: 'Under Maintenance',
          route: '/under-maintenance'
        },
        {
          title: 'Error 404',
          route: '/error-404'
        }
      ]
    },
    {
      title: 'Fundraiser',
      subMenu: [
        {
          title: 'Browse Fundraiser',
          route: '/browse-fundraiser'
        },
        {
          title: 'Become A Fundraiser',
          route: '/become-a-fundraiser'
        },
        {
          title: 'Fundraiser Detail',
          route: '/fundraiser-detail'
        }

      ]
    },
    {
      title: 'Projects',
      subMenu: [
        {
          title: 'Project',
          route: '/project'
        },
        {
          title: 'Project Categories',
          route: '/project-categories'
        },
        {
          title: 'Project Sidebar',
          route: '/project-sidebar'
        },
        {
          title: 'Project Story',
          route: '/project-story'
        }
      ]
    },
    {
      title: 'Blog',
      subMenu: [
        {
          title: 'Blog',
          route: '/blog'
        },
        {
          title: 'Blog Grid',
          route: '/blog-grid'
        },
        {
          title: 'Blog List',
          route: '/blog-list'
        },
        {
          title: 'Blog Details',
          route: '/blog-details'
        }
      ]
    },
    {
      title: 'Contact Us',
      route: '/contact-us'
    }
  ]
}
