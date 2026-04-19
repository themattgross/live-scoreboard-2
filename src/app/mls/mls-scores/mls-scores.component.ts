import { Component, OnInit, OnDestroy } from '@angular/core';
import { ScoresService } from '../../scores.service';
import { CommonModule } from '@angular/common';
import { Observable, interval, Subscription } from 'rxjs';
import { switchMap, startWith, tap } from 'rxjs/operators';

@Component({
  selector: 'app-mls-scores',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './mls-scores.component.html',
  styleUrl: './mls-scores.component.scss'
})
export class MlsScoresComponent implements OnInit, OnDestroy {
  scoreboardData$!: Observable<any>;

  constructor(private scoresService: ScoresService) {}

  ngOnInit() {
    this.scoreboardData$ = interval(1 * 60 * 1000).pipe(
      startWith(0), // Fetch data immediately on initialization
      switchMap(() => this.scoresService.getMls()),
      tap(() => console.log("MLS Data refreshed."))
    );
    console.log("MLS Component Initialized.");
  }

  ngOnDestroy() {
    console.log("MLS Destroyed.");
  }

  trackByEventId(index: number, event: any): string {
    return event.id;
  }
}
