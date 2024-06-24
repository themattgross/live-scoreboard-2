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

  ngOnDestroy(): void {
    console.log("MLB Standings destroyed.");
  }

}
