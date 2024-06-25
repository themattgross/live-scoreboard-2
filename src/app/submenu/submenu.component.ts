import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, NavigationEnd, RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-submenu',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, RouterLinkActive],
  templateUrl: './submenu.component.html',
  styleUrl: './submenu.component.scss'
})
export class SubmenuComponent implements OnInit {

  isVisible: boolean = false;
  currentLeague: string | null = null;

  constructor(private router: Router) { }

  ngOnInit(): void {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.checkUrl(event.urlAfterRedirects);
      }
    });
  }

  checkUrl(url: string): void {
    // Define the URL patterns for each league
    const leagueUrls = {
      MLB: '/mlb',
      UFL: '/ufl',
      MLS: '/mls'
    };

    // Determine which league's submenu should be visible
    this.currentLeague = null;
    for (const [league, path] of Object.entries(leagueUrls)) {
      if (url.startsWith(path)) {
        this.currentLeague = league;
        break;
      }
    }

    this.isVisible = this.currentLeague !== null;
  }

}
