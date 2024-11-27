
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
      title: 'Accueil',
      route: '/index-2'
    },
    {
      title: 'A propos',
      subMenu: [
        {
          title: 'Qui sommes-nous ?',
          route: '/about-us'
        },
        {
          title: 'Nos projets',
          route: '/project-categories'
        },
        {
          title: 'FAQ',
          route: '/faq'
        }
      ]
    },
    {
      title: 'Nos Actions',
      subMenu: [
        {
          title: 'Nos Evenements',
          route: '/browse-fundraiser',
        },
        {
          title: 'Nos réalisations',
          route: '/blog'
        },
        {
          title: 'Nos Projets en cours',
          route: '/project',
        },
      ]
    },
    {
      title: 'Nous Aider',
      subMenu: [
        {
          title: 'Faire un don',
          route: '/become-a-fundraiser'
        },
        {
          title: 'Devenir bénévole',
          route: '/become-a-volunteer'
        },
      ]
    },
    {
      title: 'Nous contacter',
      route: '/contact-us'
    }
  ]
}
