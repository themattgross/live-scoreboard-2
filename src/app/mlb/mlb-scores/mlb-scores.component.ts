import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../../scores.service';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription } from 'rxjs';
import { switchMap, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mlb-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mlb-scores.component.html',
  styleUrl: './mlb-scores.component.scss'
})
export class MlbScoresComponent implements OnInit, OnDestroy {
  scoreboardData$!: Observable<any>;

  constructor(private scoresService: ScoresService) {}

  ngOnInit() {
    this.scoreboardData$ = interval(1 * 60 * 1000).pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.scoresService.getMlb()),
      tap(() => console.log("MLB Data refreshed."))
    );
    console.log("MLB Component Initialized.");
  }

  ngOnDestroy() {
    console.log("MLB Destroyed.");
  }
}
