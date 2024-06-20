import { Component, OnInit } from '@angular/core';
import { StandingsService } from '../standings.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

//interface here

@Component({
  selector: 'app-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './standings.component.html',
  styleUrl: './standings.component.scss'
})
export class StandingsComponent implements OnInit {

  league: string = 'mlb'; // Default league
  /* standings: Standing[] | null = null; */
  standings$!: Observable<any>;
  error: any = null;
  private standingsSubscription!: Subscription;

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.getStandings();
    console.log(this.standings$!);
  }

  getStandings() {
    this.standings$ = this.standingsService.getMlbDivision().pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.standingsService.getMlbDivision())
    );
    this.standingsSubscription = this.standings$.subscribe(data => {
      console.log("Standings loaded.");
      console.log(data);
    });
    console.log("Standings Initialized.");
  }

}
