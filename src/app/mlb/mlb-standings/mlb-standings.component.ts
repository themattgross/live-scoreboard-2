import { Component, OnInit, OnDestroy } from '@angular/core';
import { StandingsService } from '../../standings.service';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';
import { switchMap, startWith } from 'rxjs/operators';

//interface here

@Component({
  selector: 'app-mlb-standings',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlb-standings.component.html',
  styleUrl: './mlb-standings.component.scss'
})
export class MlbStandingsComponent implements OnInit, OnDestroy {

  /* standings: Standing[] | null = null; */
  standings$!: Observable<any>;
  wildcardStandings$!: Observable<any>;
  error: any = null;
  private standingsSubscription!: Subscription;

  constructor(private standingsService: StandingsService) {}

  ngOnInit(): void {
    this.getStandings();
  }

  getStandings() {
    this.standings$ = this.standingsService.getMlbDivision().pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.standingsService.getMlbDivision())
    );
    console.log("MLB division standings initialized.");

    this.wildcardStandings$ = this.standingsService.getMlbWildcard().pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.standingsService.getMlbWildcard())
    );
    /* this.standingsSubscription = this.wildcardStandings$.subscribe(data => {
      console.log("MLB wild card standings refreshed.");
      console.log(data);
    }); */
    console.log("MLB wild card standings initialized.");
  }

  ngOnDestroy(): void {
    console.log("MLB Standings destroyed.");
  }

}
